import React from 'react';
import './ItemDetail.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    const [quant, setQuant] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (quant) => {
      setQuant(quant);
      addToCart(item, quant);
    };

    console.log(item);
    return (
    <div className='fullDetailFormat'>
      <div className='fullDetailTitle'>
        <h2 className='objectDetailTitle'>{item.title}</h2>
      </div>
      <div className='detailImg container'>
        <img className='formatDetailImg mx-auto' src={
          item.thumbnail} alt={item.title}/>
      </div>
      <div className='moreDetailData'>
        <div className='search column'>
          <p>Seccion de Busqueda: {item.universe}</p> 
          <p>Ref. Number: {item.code}</p>
        </div>
        <div className='description'>          
          <p>{item.details}</p>
        </div>
        <div className='price'>
          <p className='detailPrice'>Precio: ${item.price}</p>
        </div>
        <div className='countContainer'>
          {quant >= 0 && <ItemCount stock={item.stock} init={1} price={item.price} onAdd={onAdd} />}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail


