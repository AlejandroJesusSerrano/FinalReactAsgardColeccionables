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
        phone: ''
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

    const addInput = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };

    useEffect(()=>{
        const buildOrder = async () => {
            try{
                const formDataGet = addInput(setFormData)
        
                setOrder ({
                    buyer: { formDataGet },
                    items: cart.map((product) => ({title:product.title,     price:product.price, quant:product.quant})),
                    total: totalPrice(),
                    date: now.format('DD/MM/YYYY')
                })
            
            } catch (err) {
                console.log (err)
            };

        };
    }, [order]);
    
    
        
    

    const sendOrder = async (e)=> {
        e.preventDefault()
        // if(setFormData !== formInitialValue){
        //     buildOrder(formData)    
        // }
        console.log(order)
        // try{
        //     await addDoc(collection(db, 'orders'), {
        //         ...order
        //     })
        // } catch (err) {
        //     console.log(err)
        // };
        setFormData({...formInitialValue});
        setLoading(false)       
    };

    // useEffect(()=>{
    //     if(formData !== formInitialValue){
    //         //setLoading(true)
    //         buildOrder(formData);
    //     }

    // }, [formData])


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
                            <form className="buy-form" onSubmit={sendOrder}>
                                <div className="card card-body bg-dark text-warning">
                                    <div className='form-group'>
                                        <div className="name mb-3">
                                            <input name="names" id="names"  type="text" value={formData.names} onChange={addInput} placeholder='Nombre/s:'/>
                                        </div>
                                        <div className="lastN mb-3">
                                            <input name="lastNames" id="lastNames"  type="text" value={formData.lastNames} onChange={addInput} placeholder='Apellido/s:' />
                                        </div>
                                        <div className="email mb-3">
                                            <input type="mail" name='mail' id='mail' value={formData.mail} onChange={addInput} placeholder='Direccion de E-m@il:'/>
                                        </div>
                                        <div className="phone mb-3">
                                            <input type="text" name='phone' id='cel' value={formData.phone} onChange={addInput} placeholder='Nùmero de telefono:'/>
                                        </div>
                                        <div className="buyBtn mb-3">
                                            <button id="buyConf" onClick={setOrder} className="addProduct">
                                                <span>Comprar</span>
                                            </button>
                                            <button className="goToList" type="button" onClick={deleteAll}>
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
