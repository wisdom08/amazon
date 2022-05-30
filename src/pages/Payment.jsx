import React, {useEffect, useState} from 'react';
import "../styles/Payment.css"
import {Link, useNavigate} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "../components/axios";
import {db} from "../config/firebase";
import {useDispatch, useSelector} from "react-redux";
import {emptyBasket} from "../redux";
import {getBasketTotal} from "../redux/basket/reducer";

function Payment() {

    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const basket = useSelector((state) => state.basket.basket);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();


    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: "/payments/create?total=" + getBasketTotal(basket) * 100
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])




    const handleSubmit = async (event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created

                })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch(emptyBasket())

            navigate('/orders')

        })

    }


    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }



    return (
        <div className="payment">
            <div className='payment_container'>


                <Link to="/checkout">
                    <h1>
                        장바구니 다시 설정하기 ({basket?.length} items )
                    </h1>
                </Link>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3> 배달 받을 곳 </h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>서울특별시</p>
                        <p>관악구 행운동</p>
                    </div>

                </div>


                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3> 리뷰 와 배달 </h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct key={item}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                </div>


                <div className='payment_section'>

                    <div className='payment_title'>
                        <h3>결제 방법</h3>

                    </div>
                    <div className="payment_details">

                        <form onSubmit={handleSubmit}>

                            <CardElement onChange={handleChange}/>

                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (

                                        <h3> 총액 : {value} 원</h3>
                                    )}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₩"}
                                />


                                <button disabled={processing || disabled || succeeded}>

                                    <span>{processing ? <p>결제중입니다</p> : "결제하기"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}


                        </form>


                    </div>
                </div>


            </div>
        </div>
    );
}

export default Payment;
