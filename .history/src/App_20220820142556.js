import React  from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contact from './components/ContactUs/ContactUs';
import Cart from './components/Cart/Cart';
import BuyForm from './components/BuyForm/BuyForm';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Provider from './Context/CartContext';
import CrudContainer from './components/CrudContainer/CrudContainer';


function App() {
  return (
    <Provider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="universe/:universe" element={<ItemListContainer />} />
            <Route path="detail/:id" element={<ItemDetailContainer />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Crud" element={<CrudContainer />} /> 
            <Route path="Cart" element={<Cart />} /> 
            <Route path="*" element={<div>Err 404 Page Not Found</div>} />
            <Route path="cart/BuyConf" element={<BuyForm />} />
            <Route path="/admin" element={<CrudContainer/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </Provider>
  );
}

export default App;
