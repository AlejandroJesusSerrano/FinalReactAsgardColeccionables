import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from 'react';
import firebaseApp from '../../firebase/credentials';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import Swal from 'sweetalert2'

export const ItemListContainer = () => {
    const db = getFirestore(firebaseApp);

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { universe } = useParams();

    useEffect (() => {
        setLoading(true);
        if (!universe) {
            const itemsCollection = collection(db, "items");
            getDocs (itemsCollection).then((snapshot) => {
                setItems(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
                setLoading(false);
            });
        } else {
            const q = query(collection(db, 'items'), where('universe', '==', `${universe}`));
            getDocs(q)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    Swal.fire({
                        icon: "error",
                        iconColor: "#f2c230",
                        title: "¡Oooops!",
                        text: "Lo sentimos, no nos quedan productos en Stock para este Universo",
                        background: "#212121",
                        color: "#f2c230",
                        confirmButtonColor: "#f2c230",
                    });
                }
                setItems(snapshot.docs.map((item) => ({ id: item.id, ...item.data() }) ));
                setLoading(false);
            });
        };    
        
    }, [universe]);

    return (
            <div className='itemListContainer' key={items.code} >
                {loading 
                    ?   <div className='loading' >
                            <h2>Loading...</h2>
                            <PacmanLoader color={"#f2c230"} loading={loading} />
                        </div>
                    : <ItemList items={items}/>}
            </div>
    );
};

export default ItemListContainer;