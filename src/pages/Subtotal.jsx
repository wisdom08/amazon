import React from 'react';
import "../styles/Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../components/StateProvider";
import {getBasketTotal} from "../components/Reducer";

function Subtotal() {

    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            총 액 ({basket.length} items ): <strong>{value} 원</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> 체크박스입니다.
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}

            />
            <button>결제하기</button>
        </div>
    );
}

export default Subtotal;
