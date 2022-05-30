import {ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET} from "./types";

export const addToBasket = (basket) => {
    return {
        type: ADD_TO_BASKET,
        payload: basket,
    }
}

export const removeFromBasket = (id) => {
    return {
        type: REMOVE_FROM_BASKET,
        id: id
    }
}

export const emptyBasket = () => {
    return {
        type: EMPTY_BASKET
    }
}
