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
    
    const formInitialValue = {
        names: '',
        lastNames: '',
        mail: '',
        cel: ''
    };

    const orderInitialValue = {
        buyer:{},
        items: [],
        total:'',
        date:''
    }



    const { cart, totalPrice, deleteAll} = useContext(CartContext);

    const [formData, setFormData] = useState(formInitialValue);
    const [order, setOrder] = useState(orderInitialValue)	
    
    const [loading, setLoading] = useState (false);

    const addInputs = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const buildOrder = () => {
        setOrder ({
            buyer: {formData},
            items: cart.map((product) => ({title:product.title, price:product.price, quant:product.quant})),
            total: totalPrice(),
            date: now.format('DD/MM/YYYY')
        })
    }

    const sendOrder = async (e)=> {
        e.preventDefault()
        try{
            await addDoc(collection(db, 'orders'), {
                ...order
            })
        } catch (err) {
            console.log(err)
        };
        setFormData({...formInitialValue});
        setLoading(false)       
    };

    useEffect(()=>{
        if(formData !== formInitialValue){
            setLoading(true)
            buildOrder(formData);
        }

    }, [formData])


    return (
        <div className='orderForm'>
            {loading 
                ?   <div className='loading'>
                        <h2>Loading...</h2>
                        <PacmanLoader color={"#f2c230"} loading={loading} />
                    </div>
                :   <div className='row container'>
                        <div className='col-md-4'>
                            <h3 className='formTitle'>Complete los datos a continuaci??n para completar la compra</h3>
                            <form className="buy-form" onSubmit={sendOrder}>
                                <div className="containerForm">
                                    <div className="name">
                                        <label htmlfor="names">Nombre/s:</label>
                                        <input name="names" id="names"  type="text" value={formData.names} onChange={addInputs}/>
                                    </div>
                                    <div className="lastN">
                                        <label htmlfor="lastNames">Apellido/s:</label>
                                        <input name="lastNames" id="lastNames"  type="text" value={formData.lastNames} onChange={addInputs}/>
                                    </div>
                                    <div className="email">
                                        <label htmlfor="mail">Email:</label>
                                        <input type="mail" name='mail' id='mail' value={formData.mail} onChange={addInputs}/>
                                    </div>
                                    <div className="phone">
                                        <label htmlfor="cel">Tel??fono:</label>
                                        <input type="text" name='cel' id='cel' value={formData.phone} onChange={addInputs}/>
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
                                                <span>Agregar M??s Productos</span>
                                            </button>
                                        </Link>
                                    </div>  
                                </div>
                            </form>
                            <div className='col-md-8'>
                                <h2>Detalle de Compra</h2>
                            </div>

                        </div>
                    </div>
            }   
        </div>
    )
};

export default BuyForm;
