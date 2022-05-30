import React from 'react';
import "../styles/CheckoutProduct.css"
import {useDispatch} from "react-redux";
import {removeFromBasket} from "../redux";

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const dispatch = useDispatch();

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct_image"/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>₩</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating).fill().map((v, i) => (<p key={i}>⭐️</p>)) // 에러 어떻게 제거할 수 있는지?
                    }
                </div>

                {!hideButton && (<button onClick={()=>dispatch(removeFromBasket(id))}>장바구니에서 제거하기</button>)}

            </div>

        </div>
    );
}

export default CheckoutProduct;
