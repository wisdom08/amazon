import React from 'react';
import "../styles/Product.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToBasket} from "../redux";

function Product(basket) {

    const dispatch = useDispatch();
    return (
        <div className="product">
            <div className="product_info">
                <p>{basket.title}</p>
                <p className="propduct_price">
                    <small>가격</small>
                    <strong>{basket.price}</strong>
                    <small>원</small>
                </p>
                <div className="product_rating">
                    {
                        Array(basket.rating).fill().map((v, i) => (<p key={i}>⭐️</p>))
                    }
                </div>
            </div>
            <img src={basket.image} alt=""/>
            <Link to="/checkout">
                <button
                    onClick={() => dispatch(addToBasket(basket))}
                    className="product_basketButton">장바구니에 담기
                </button>
            </Link>
        </div>
    );
}

export default Product;
