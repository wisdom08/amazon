import React from 'react';
import "../styles/Checkout.css"
import Subtotal from "./Subtotal";
import {useSelector} from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

    const basket = useSelector((state) => state.basket.basket);
    const user = useSelector((state) => state.user.user);

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                     src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
                     alt=""/>

                <div>
                    <h2 className="checkout_title">
                        {user? user.email : "방문자"} 님의 장바구니입니다.
                    </h2>

                    {basket.map((item) => (
                        <CheckoutProduct key={item.id}
                            id={item.id} title={item.title} image={item.image}
                                         price={item.price} rating={item.rating}
                        />
                    ))}

                </div>

            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    );
}

// function mapStateToProps(state) {
//     return {
//         basket: state.basket,
//         user: state.user
//     }
// }
//
// export default connect(mapStateToProps)(Checkout);

export default Checkout;
