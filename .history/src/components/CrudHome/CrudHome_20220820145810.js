import './CrudHome.css';


import React from 'react';
import firebaseApp from '../../firebase/credentials';
import { getAuth, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';

import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore';

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export const CrudHome = ({mailUser}) => {
    
    const initalValue = {
        title: '',
        price: 0,
        thumbnail: '',
        description: '',
        universe: '',
        details: '',
        stock: 0
    };

    const [product, setProduct] = useState(initalValue);
    const [list, setList] = useState([]);
    const [subId, setSubId] = useState('');


    // capture data
    const addInputs = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]:value});
    };
// save or update Data
    const saveData = async (e)=>{
        e.preventDefault();
        if(subId===''){
            try {
                await addDoc(collection(db, 'items' ), {
                    ...product
                })
            } catch (err) {
                console.log(err);
            };
        } else {
            await setDoc(doc(db, 'items', subId), {
                ...product
            })
        };
        setProduct({...initalValue});
        setSubId('');
       
    };

    // render productsList

    useEffect(()=>{
        const getList = async()=>{
            try{
                const querySnapshot = await getDocs(collection(db, 'items'))
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id:doc.id});
                });

                setList(docs);

            } catch (err) {
                console.log(err);
            };
        };

        getList();
    },[list]);

    // Delete prod. func

    const deleteProduct= async(id)=>{
        await deleteDoc(doc(db, 'items', id));
    };

    // Updtae prod. func

    const getOne = async(id)=> {
        try{
            const docRef = doc(db, 'items', id);
            const docSnap = await getDoc(docRef);
            setProduct(docSnap.data());
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(()=> {
        if(subId !== ''){
            getOne(subId);
        }
    }, [subId]);


    return (
        <div className='container'>
            <p className='signedUser'>Bienvenido, <strong>{mailUser}</strong> Haz inicado sesion!.</p>
            <button className='signOutBtn' onClick={()=>signOut(auth)}>
                Sign Out
            </button>
            
            <hr className='separator' />

            <div className='row'>
                {/* form */}
                <div className='col-md-4 pb-3 mb-3 formContStyles'>
                    <h3 className="text-center mb-3 mt-3 hTreeStyles">{subId === '' ? 'Agregar Producto' : 'Actualizar Datos de Producto'}</h3>
                    <form onSubmit={saveData}>
                        <div className='card card-body bg-dark text-warning '>
                            <div className='form-group'>
                                <div className="prodsFormInput">
                                    
                                    <input name="title" className='mb-3 form-control bg-warning border-0' id="title"  type="text" onChange={addInputs} value={product.title} placeholder='Ingrese el nombre del producto' />
                                </div>
                                <div className="prodsFormInput">
                                    <label> Ingrese el precio de venta </label>
                                    <input name="price" className='mb-3 form-control bg-warning border-0 ' id="price"  type="number" onChange={addInputs} value={product.price} />
                                </div>
                                <div className="prodsFormInput">
                                    <input name="thumbnail" className='mb-3 form-control bg-warning border-0' id="routeImg"  type="text" onChange={addInputs} value={product.thumbnail} placeholder='Ingrese la ruta o url de la imagen'/>
                                </div>
                                <div className="prodsFormInput">
                                    <input name="description" className='mb-3 form-control bg-warning border-0' id="description"  type="text" onChange={addInputs} value={product.description} placeholder='Ahora, una breve descripcion del producto'/>
                                </div>
                                <div className="prodsFormSelect">
                                    <select name="universe" className='mb-3 form-control bg-warning border-0' id="universe" onChange={addInputs} value={product.universe}>
                                        <option hidden> Seleccione el universo al que pertenece...</option> 
                                        <option value="Marvel">Marvel</option>
                                        <option value="DC">DC</option>
                                        <option value="Funko">Funkos</option>
                                        <option value="StarWars">Star Wars</option>
                                        <option value="MangaAnime">Manga & Anime</option>
                                        <option value="HarryPotter">Harry Potter</option>
                                        <option value="SportsArtists">Sports & Artists</option>
                                    </select>
                                </div>
                                <div className="prodsFormArea">
                                    
                                    <textarea name="details" className='form-control mb-3 bg-warning border-0' id="details" cols="30" rows="10" onChange={addInputs} value={product.details} placeholder='Aqui una descripcion mas detallada del producto...' />
                                </div>
                                <div className="prodsFormInput">
                                    
                                    <input name="stock" className='form-control bg-warning border-0' id="stock"  type="number" onChange={addInputs} value={product.stock} placeholder='ingrese el stock con el cuenta' />
                                </div>
                                <div className="btnContainer">
                                    <button id="addProduct" className="addProduct">
                                        {subId === '' ? 'Guardar' : 'Actualizar'}
                                    </button>
                                </div>
                            </div>
                        </div>  
                    </form>
                </div>
                {/* productsList */}
                <div className='col-md-7 mx-auto pb-3 mb-3 bg-drak formContStyles'>
                    <h2 className='text-center mb-3 hTreeStyles'>Lista de Productos</h2>
                    <div className='container card bg-dark'>
                        {
                            list.map(list => (
                                <div key={list.id}>
                                    <div className="card mb-3 bg-warning" style={{ maxWidth: 720 }}>
                                        <div className='row g-0'>
                                            <div className='col-md-4'>
                                                <img src={list.thumbnail} className="card-img-start" style={{maxWidth:180}} alt={list.title} />
                                            </div>
                                            <div className='col-md-8'>
                                                <div className="card-body">
                                                    <p className='card-text'>Producto: {list.title}</p>
                                                    <p className='card-text'>Descripcion: {list.description}</p>
                                                    <p className='card-text'>Precio de venta: ${list.price}</p>
                                                    <p className='card-text'>Stock: {list.stock}</p>
                                                </div>
                                                <button className='btn btn-dark btn-outline-warning m-1' onClick={(()=> setSubId(list.id))}>
                                                    Actualizar 
                                                </button>
                                                <button className='btn btn-danger m-1' onClick={(()=>deleteProduct(list.id))}>
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrudHome