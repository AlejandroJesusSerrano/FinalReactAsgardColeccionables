import React from 'react';
import './Cart.css';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import EmptyCart from '../EmptyCart/EmptyCart';
import { FulledCart } from '../FulledCart/FulledCart';

export const Cart = () => {
    
    const { cart } = useContext(CartContext);

    if (cart.legth === 0) {

        return <EmptyCart />

    } else {
        
        return <FulledCart />           
    };
};

export default Cart
