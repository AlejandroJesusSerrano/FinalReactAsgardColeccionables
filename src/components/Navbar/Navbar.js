import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

import Logo from '../images/AsgardNav.svg'

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg background'>
        <div className='container-fluid'>
          <Link className='navbar-brand px-0 py-0 mx-0 my-0' to='/'>
            <img src={Logo} className='px-0 py-0 mx-0 my-0' alt='Logotipo Asgard Coleccionables' width='150'/>
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'/>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='spBtn navbar-nav ms-5'> 
              <li className='nav-item spBtn init'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} aria-current='page' to='/'>Home</NavLink>
              </li>
            </ul>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} to='universe/DC'>DC</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} to='universe/Marvel'>Marvel</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} to='universe/MangaAnime'>Manga & Anime</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} to='universe/HarryPotter'>Universo Harry Potter</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} to='universe/StarWars'>Universo StarWars</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} to='universe/Funko'>Funkos</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} to='universe/SportsArtists'>Artistas y Deportistas</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : 'nav-link med'} to='/About'>About Us</NavLink>
              </li>
            </ul>
            <ul className='spBtn navbar-nav me-5'>
              <li className='nav-item'>
                <NavLink className={({isActive}) => isActive ? 'nav-link activeLink' : ' med'} to='/Crud'>Admin</NavLink>
              </li>
            </ul>
              <CartWidget/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
