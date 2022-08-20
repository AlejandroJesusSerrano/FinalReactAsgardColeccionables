import React from 'react';
import './ContactUs.css';

export const ContactUs = () => {
  return (
    <div className="col-md-12 px-1 mt-2 mx-auto row">
            <form action="#" className="contactForm col-md-6 col-lg-8 row ms-auto me-0 wow animate__animated animate__fadeInLeft">
                
                <div className="col-md-12 col-lg-6 mb-3">
                    
                    <input type="text" name="names" id="names" placeholder="Por favor, escriba su/s nombre/s" className="textInput col-lg-12"/>
                </div>

                <div className="col-md-12 col-lg-6 mb-3">
                   
                    <input type="text" name="lNames" id="lNames" placeholder="Por favor, escriba su/s apellido/s" className="textInput col-lg-12"/>
                </div>
                
                <div className="col-md-12 col-lg-6 mb-3">
                   
                    <input type="tel" name="phone" id="phone" placeholder="Por favor, escriba su N° de telefono con su codigo de área" className="telInput col-lg-12"/>
                </div>

                <div className="col-md-12 col-lg-6 mb-3">
                   
                    <input type="email" name="mail" id="mail" placeholder="Por favor, escriba su dirección de e-m@ail" className="mailInput col-lg-12"/>
                </div>

                <div className="col-md-12 mb-3">
                   
                    <input type="text" name="subject" id="subject" placeholder="Por favor, escriba el motivo de su consulta"className="col-md-12"/>
                </div>
                
                <div className="col-md-12 mb-3">
                   
                    <textarea name="message" id="message" cols="140" rows="15" className="col-md-12"/>
                </div>
                
                <div className="row col-md-12 col-lg-8 mb-3">
                    <div className="col-md-12 col-lg-6 mx-auto">
                        <button type="submit" className="button btnDark">
                            <span>Enviar</span>
                        </button>
                    </div>
                
                    <div className="col-md-12 col-lg-6 my-1 mx-auto">
                        <button type="reset" className="button btnDark">
                            <span>Cancelar</span>
                        </button>
                    </div>
                </div>
            </form>
            <div className="contactInfo col-md-6 col-lg-4 row ms-0 me-auto wow animate__animated animate__fadeInRight">
                <div className=" col-md-12 row">
                    <h4 className="subtitle">Mas Información</h4>
                </div>  
                
                <div className="col-md-12 row">
                    <img src="img/icons/whatsapp.svg" alt="whatsapp" className="col-md-6"/>
                    <p className="listAtentionDark col-md-6">
                        +549-387-4654654
                    </p>
                </div>

                <div className="col-md-12 row">
                    <img src="img/icons/phone.svg" alt="telephone" className="col-md-6"/>
                    <p className="listAtentionDark col-md-6">
                        +549-387-1231231
                    </p>
                </div>
                    
                <div className="col-md-12 row">
                    <img src="img/icons/positionicon.svg" alt="Dirección" className="col-md-6"/>
                    <p className="listAtentionDark col-md-10">
                        Camila Quintana de Niño N° 38
                        Cafayate, Salta, Argentina
                    </p>
                </div>
                
                <div className="mapResponsive">
                <iframe
                  width="600"
                  height="450" 
                  style={{ border:0 }}
                  loading="lazy" allowFullScreen 
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpUZBqrzDG5QROcGQG6jVWFg&key=AIzaSyA67k66x5SqOVzQ5sDyH30tuVgmNPGVj80"/>
                </div>
            </div>
        </div>
  )
}

export default ContactUs