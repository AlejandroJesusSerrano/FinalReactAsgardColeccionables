import React from 'react';
import './BuyForm.css';
import { useContext, useState } from "react";
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
        phone: ''
    };

    const { cart, totalPrice, deleteAll} = useContext(CartContext);

    const [formData, setFormData] = useState(formInitialValue);
    const [loading, setLoading] = useState (false);
    
    const addInput = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };
    
    const createOrder = (e) =>{
        setLoading(true);
        e.preventDefault();
        const orderCollection = collection(db, 'orders');
        const order = {
            buyer:{formData},
            items: cart.map((product) => ({title:product.title,    
            price:product.price, quant:product.quant})),
            total: totalPrice(),
            date: now.format('DD/MM/YYYY')
        };

        addDoc(orderCollection, order).then((res) => {
            alert(`la compra se realizó de manera exitosa!`);
            setFormData(formInitialValue);
            setLoading(false);
        })
        .catch ((err) => {
            console.log(err)
        });  
    };

    return (
        <div className='orderForm'>
            {loading 
                ?   <div className='loading'>
                        <h2>Loading...</h2>
                        <PacmanLoader color={"#f2c230"} loading={loading} />
                    </div>
                :   <div className='row container'>
                        <div className='col-md-4'>
                            <h3 className='formTitle'>Complete los datos a continuación para completar la compra</h3>
                            <form className="buy-form" onSubmit={createOrder}>
                                <div className="card card-body bg-dark text-warning">
                                    <div className='form-group'>
                                        <div className="buyerInput name mb-3">
                                            <input name="names" id="names"  type="text" value={formData.names} onChange={addInput} placeholder='Nombre/s:'/>
                                        </div>
                                        <div className="buyerInput mb-3">
                                            <input name="lastNames" id="lastNames"  type="text" value={formData.lastNames} onChange={addInput} placeholder='Apellido/s:' />
                                        </div>
                                        <div className="buyerInput mb-3">
                                            <input type="mail" name='mail' id='mail' value={formData.mail} onChange={addInput} placeholder='Direccion de E-m@il:'/>
                                        </div>
                                        <div className="buyerInput mb-3">
                                            <input type="text" name='phone' id='cel' value={formData.phone} onChange={addInput} placeholder='Nùmero de telefono:'/>
                                        </div>
                                        <div className='orderBtns'>
                                            <button type='submit' id='createOrder' className="addProduct">
                                                <span>Comprar</span>
                                            </button>
                                            <button className="addProduct" type="button" onClick={deleteAll}>
                                                <span>Vaciar Carrito</span>
                                            </button>
                                            <Link to="/">
                                                <button className="addProduct" type="button">
                                                    <span>Agregar</span>
                                                </button>
                                            </Link>
                                        </div> 
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
