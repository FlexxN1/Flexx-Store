import { useState } from 'react'
import initialState from '../initialState';

function useInitialState() {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = index => {
        const newCart = state.cart;
        newCart.splice(index, 1);

        setState({
            ...state,
            cart: newCart
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
        ...state,
        orders: [...state.orders, payload]
        })
    } 
    return {
        addToCart,
        removeFromCart,
        state,
        addToBuyer,
        addNewOrder,
    }
}

export default useInitialState;