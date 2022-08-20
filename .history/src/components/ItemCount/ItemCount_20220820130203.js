import './ItemCount.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountButton from '../CountButton/CountButton'
import DisplayCount from '../DisplayCount/DisplayCount'

export const ItemCount = ({ stock, init, price, onAdd }) => {
    
    const [counter, setCounter] = useState (init)
    
    const add = () => {
        counter < stock && setCounter (counter + 1);
    };

    const subst = () =>{
        counter > init && setCounter (counter -1);
    };
    
    return(
        <div className='itemClassContainer'>
            <span className='spanQuantity'>Seleccione cuantas figuras desea: </span>
            <div className='itemCountContainer'>
                <CountButton className='countBtn' op = '-' func={subst} />
                <DisplayCount className='disCount' value={counter} />
                <CountButton className='countBtn' op = '+' func={add} />
            </div>
            <span className='priceToPay'>
                Total a pagar AR$: ${counter * price}
            </span>
            <button className='addBtn' onClick={ () => onAdd(counter) }>
                AGREGAR AL CARRITO
            </button>
            <Link className='addLink' to='/cart'> COMPRAR </Link>
        </div>

    );
};

export default ItemCount