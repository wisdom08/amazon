import React from 'react';
import "../styles/Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getBasketTotal} from "../redux/basket/reducer";

function Subtotal() {

    const navigate = useNavigate();
    const basket = useSelector((state) => state.basket.basket);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            총 액 ({basket.length} items ): <strong>{value} 원</strong>
                        </p>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}

            />
            <button onClick={e => navigate("/payment")}>결제하러 가기</button>
        </div>
    );
}

export default Subtotal;
