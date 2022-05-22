import React from 'react';
import "../styles/Product.css"
import {Link} from "react-router-dom";

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="propduct_price">
                    <smallr>가격</smallr>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map(() => (<p>⭐️</p>))
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <Link to="/checkout"><button className="product_basketButton">장바구니에 담기</button></Link>
        </div>
    );
}

export default Product;
