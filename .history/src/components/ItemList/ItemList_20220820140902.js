import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

export const ItemList = ({items}) => {
   
   return (
      <div className='cardContainer' >
         {
            items.map((item) => (
               <Item
                  item = {item}   key = {item.id} />
            ))}
      </div>
   );
};

export default ItemList
