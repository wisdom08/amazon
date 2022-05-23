import React from 'react';
import "../styles/Product.css"
import {Link} from "react-router-dom";
import {useStateValue} from "../components/StateProvider";

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="propduct_price">
                    <small>가격</small>
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
            <Link to="/checkout">
                <button
                    onClick={addToBasket}
                    className="product_basketButton">장바구니에 담기
                </button>
            </Link>
        </div>
    );
}

export default Product;
