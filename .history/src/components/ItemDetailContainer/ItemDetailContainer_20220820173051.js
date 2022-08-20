import React from 'react';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { PacmanLoader } from "react-spinners";
import firebaseApp from '../../firebase/credentials';

import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp);

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect (() => {
        setLoading(true);
        const itemRef = doc(db, "items", id)
        getDoc (itemRef).then((res) => {
            setItem({id: res.id, ...res.data() });
            setLoading(false);
        });
    }, []);

    return (
        <div className='detailContainer'>
            {loading
                ?   <div className='loading'>
                        <h2>Loading...</h2>
                        <PacmanLoader color={"#f2c230"} loading={loading} />
                    </div>
                :   <ItemDetail item = {item}/>
            }
        </div>
    );
};

export default ItemDetailContainer
