import {ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET} from "./types";

const initialState = {
    basket: [],
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

const basketReducer = (state =initialState, action) => {
    let copy = [...state.basket]
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...copy,
                basket: [...copy, action.payload]
            };
        case REMOVE_FROM_BASKET:
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    ' (id: ' +
                    action.id +
                    ')이 장바구니에 존재하지 않습니다 '
                )
            }

            return {
                ...state,
                basket: newBasket
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        default: {
            return {
                ...state
            };
        }
    }
}

export default basketReducer;
