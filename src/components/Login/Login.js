import React from 'react';
import './Login.css';
import { useState } from 'react';

import AsgardUno from '../images/AsgardAFinishblackNoBack.png'
import AsgardDos from '../images/AsgardFinishBlackBackground.png'
import AsgardTres from '../images/faviconYellow.png'

import firebaseApp from '../../firebase/credentials'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(firebaseApp)

export const Login = () => {
  
  const [register, setRegister] = useState(false)

  const handlerSubmit = async(e)=>{
    e.preventDefault()
    const email = e.target.userMail.value;
    const password = e.target.password.value;

    if(register) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  }
  
  return (
        <div className='row container aligner p-4'>
            <div className='col-8'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade carouselSetting" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={AsgardUno} className="imgSize d-block mx-auto" alt="Logo Asgard Simplify" />
                    </div>
                    <div className="carousel-item">
                      <img src={AsgardDos} className="imgSize d-block mx-auto" alt="Logo Asgard Complete" />
                    </div>
                    <div className="carousel-item">
                      <img src={AsgardTres} className="imgSize d-block mx-auto" alt="Logo Asgard Reduced" />
                    </div>
                </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
            </div>
            <div className='col-4 formStyler d-block mx-auto' >
                <div className='mt-5 mx-auto'>
                    <h1 className='formTitle'>
                        { register ? 'Registrate' : 'Inicia Sesion' }
                    </h1>
                    <form className='mx-auto' onSubmit={handlerSubmit} > 
                        <div className='mb-3 inputBuyerData'>
                            <label htmlFor='userName' className='form-label'>Nombre de Usuario</label>
                            <input type='email' name='userName' id='userMail' className='form-control' placeholder='ingresa tu E-m@ail' required/>
                        </div>
                        <div className='mb-3 inputBuyerData'>
                            <label htmlFor='pass' className='form-label'>Password</label>
                            <input type='password' name='pass' id='password' className='form-control' placeholder='ingresa tu Contraseña' required/>
                        </div>

                        <div>
                            <button className='logInBtn' type='submit'>
                                { register ? 'Registrate' : 'Iniciar Sesion' }
                            </button>
                            
                        </div>
                    </form>

                    <div className='form-group'>
                      <button className='logInBtn' type='submit' onClick={()=> setRegister(!register)}>
                        { register ? 'Ya tienes cuenta?, inicia sesion' : 'No tienes cuenta?, registrate' }
                      </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login