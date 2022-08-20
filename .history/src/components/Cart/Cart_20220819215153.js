import React from 'react';
import './Cart.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const Cart = () => {
    const { cart, deleteAll, deleteById, totalPrice} = useContext(CartContext);

    if (cart.length === 0){
        return (
        <div className="cartContainer">
            <h2 className="emptyCartDetail">
                El carrito se encuentra vacío, regresar al <Link className="emptyCartLink" to='/'> Home </Link>
            </h2>
        </div>
        );
    } else {
        return (
            <>
                <div className="cartContainer">
                    {cart.map((prod) => (
                        <div className='blockItem'>
                            <div className="buyDetail" key={prod.id}>
                                <div className="cartProductTitleCont">
                                    <h3>{prod.title}</h3>
                                </div>
                                <div className="cartProductImgCont">
                                    <img className='imgShow' src={prod.thumbnail} alt={prod.title} />
                                </div>
                                <div className="cartProductDataCont">
                                    <p className='quant'><b>Cantidad:</b> {prod.quant}</p>
                                    <p className='pric'><b>Precio X Unidad:</b> $ {prod.price}</p>
                                    <p className='pric'><b>Precio Total:</b> $ {prod.price * prod.quant}</p>
                                </div>
                                <div className="cartDeleteBtnCont">
                                    <button className="deleteBtn" onClick={() => deleteById(prod.id)}>Quitar</button>
                                </div>
                            </div>
                            <div  className="separator"> </div>

                        </div>
                    ))}
                    <div className='totalsContainer'>
                        <div className='totalToPay'>
                            <h3>Total a Pagar: ${totalPrice()} </h3>
                        </div>
                        <div className="cartConfirmBtn">
                            <Link to='./BuyConf'>
                                <button className="confirmBtn">Confirmar</button> 
                            </Link>
                        </div>
                        <div className="cartCleanAllBtnCont">
                            <button className="cleanAllBtn" onClick={deleteAll}>Vaciar Carrito</button>
                        </div>
                        
                    </div>
                </div>
            </>
        );
    };
};
};
export default Cart;
