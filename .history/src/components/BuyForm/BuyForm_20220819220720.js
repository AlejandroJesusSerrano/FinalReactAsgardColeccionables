import React from 'react';
import './BuyForm.css';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseApp from '../../firebase/credentials'
import dayjs from 'dayjs';
import { PacmanLoader } from "react-spinners";

let now = dayjs();


export const BuyForm = () => {
    const db = getFirestore(firebaseApp);
    
    const initialValue = {
        names: '',
        lastNames: '',
        mail: '',
        cel: ''
    };

    const [formData, setFormData] = useState(initialValue);

    const addInputs = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const { cart, totalPrice, deleteAll} = useContext(CartContext);
    
    const [order, setOrder] = useState({})	
    const [loading, setLoading] = useState (false);
    const [isUploading, setIsUploading] = useState(false);
    
    const handleImputChange = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        });

    };
    
    const loadOrder = (event)=> {
        event.preventDefault()
        //const ordersCollection = collection(db, 'orders');
        setOrder ({
            buyer: {form},
            items: cart.map((product) => ({title:product.title, price:product.price, quant:product.quant})),
            total: totalPrice(),
            date: now.format('DD/MM/YYYY')
        });
        
        //addDoc(ordersCollection, order).then((res) => {
        //     console.log(res);
        // }).catch((error) => {
        //     console.log(error);
        // });
        // setLoading(false);

    };

    // useEffect (() =>{
    //     setLoading(true);

    // }, )

    
    return (
        <div className='orderForm' onSubmit={loadOrder}>
            {loading 
                ?   <div className='loading'>
                        <h2>Loading...</h2>
                        <PacmanLoader color={"#f2c230"} loading={loading} />
                    </div>
                :   <div className='col-md-4'>
                        <h3 className='formTitle'>Complete los datos a continuación para completar la compra</h3>
                        <form className="buy-form" onSubmit={loadOrder}>
                            <div className="containerForm">
                                <div className="name">
                                    <label htmlfor="names">Nombre/s:</label>
                                    <input name="names" id="names"  type="text" value={form.names} onChange={handleImputChange}/>
                                </div>
                                <div className="lastN">
                                    <label htmlfor="lastNames">Apellido/s:</label>
                                    <input name="lastNames" id="lastNames"  type="text" value={form.lastNames} onChange={handleImputChange}/>
                                </div>
                                <div className="email">
                                    <label htmlfor="mail">Email:</label>
                                    <input type="mail" name='mail' id='mail' value={form.mail} onChange={handleImputChange}/>
                                </div>
                                <div className="phone">
                                    <label htmlfor="cel">Teléfono:</label>
                                    <input type="text" name='cel' id='cel' value={form.phone} onChange={handleImputChange}/>
                                </div>
                                <div className="buyBtn">
                                    <button id="buyConf" onClick={setOrder} className="addProduct">
                                        <span>Comprar</span>
                                    </button>
                                    <button className="goToList" type="button" onClick={deleteAll}>
                                        <span>Vaciar Carrito</span>
                                    </button>
                                    <Link to="/">
                                        <button className="addProduct" type="button">
                                            <span>Agregar Más Productos</span>
                                        </button>
                                    </Link>
                                </div>  
                            </div>
                        </form>
                        <div className='col-md-6'>
                        <h2>Detalle de Compra</h2>

                        </div>

                    </div>
            }
        </div>
    )
};

export default BuyForm;
