import React from "react";
import { createContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const Provider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quant) => {
        if(inCart(item.id) === undefined ) {
            setCart([ ...cart, { ...item, quant }]);
            Swal.fire({
                icon: `success`,
                iconColor: `#212121`,
                title: `¡Perfecto!`,
                text: "El producto ya se encuentra en el carrito",
                background: "#f2c230",
                color: "#212121",
                confirmButtonColor: "#212121",
            });
        } else {
            Swal.fire({
                icon: "error",
                iconColor: "#f2c230",
                title: "¡Oooops!",
                text: "El producto ya se encuentra en el carrito",
                background: "#212121",
                color: "#f2c230",
                confirmButtonColor: "#f2c230",
            });
        };
    };

    const inCart = (id) => {
        return cart.find((item) => item.id === id);
    };

    const deleteById = (id) => {
        const productsInCart = cart.filter((object) => object.id !== id);
        setCart(productsInCart);
    };

    const deleteAll = () => {
        setCart([]);
    };

    const totalProducts = () => {
        let total = 0;
        return cart.reduce((total, item) => total + item.quant, total);
    };

    const totalPrice = () => {
        const selectedProducts = cart.filter((item) => item.quant > 0);
        let total = 0;
        return selectedProducts.reduce((total, item) => total + (item.quant * item.price), total);
    };

    return (
    <CartContext.Provider value={{ cart, addToCart, deleteById, deleteAll, totalProducts, totalPrice}}>
        { props.children }
    </CartContext.Provider>
    );

}
export default Provider;
