import React from 'react'

import Image1 from '../images/batman.jpg'
import Image2 from '../images/spiderman.jpg'
import Image3 from '../images/narutochacra.jpg'

export const AboutUs = () => {
  return (
    <div>
        <div class="container-fluid pb-3 my-3 row impressionLight">
          <h2 className="mx-auto pt-1 mt-1 cardTitle">SOLO LO MEJOR AL ALCANCE DE TU MANO</h2>
          <div className="container-fluid mx-auto px-auto col-md-4">
            <div id="nosotrosCarousel" className="carousel slide carousel-fade w-100" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Image1} className="d-block w-100" alt="Hot Toys Batman"/>
                </div>
                <div className="carousel-item">
                  <img src={Image2} className="d-block w-100" alt="Hot Toys Spiderman No Way Home"/>
                </div>
                <div className="carousel-item">
                  <img src={Image3} className="d-block w-100" alt="Hot Toys Naruto Modo Sabio Chacra"/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#nosotrosCarouselgit " data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#nosotrosCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container-fluid col-xl-6 col-xxl-4">
            <p className="paragraph">
                Somos una empresa Joven, pero pujante, nacimos en el año 2.011, siendo solo un pequeño hotel de 8 habitaciónes y ahí comnenzamos nuestro crecimiento
            </p>
            <p className="paragraph">
                Siempre pensando en el huesped y lo que le gustaría, fuimos realizando incorporaciónes de servicios y espacios para su confort, como gimnasio, pileta, y proximamente un sauna seco e hidromasaje. Nuestro hotel quiere que lo visites y tratará de no dejarte ir, por lo a gusto que te hará sentir.
            </p>
            <p className="paragraph">
                Siempre estamos pensando en crecer y si existiese alguna critica, te suplicamos que nos lo hagas saber para seguir en este camino de crecimiento.
            </p>
            <p className="paragraph">
                Actualmente el Hotel Los Toneles - Cafayate, cuenta con una clientela que nos reelige continuamente y una relación calidad precio excepcional. Enre nuestros servicios, se incluyen Pileta, estacionameinto, juegos para niños, desayuno, wifi en todo el hotel, gimnasio, terraza con hamacas paraguayas, mirador y mucho mas.
            </p>
            <p className="paragraph">¡No dudes en visitarnos!, aremos lo posible para que tengas una hermosa estadía</p>
          </div>
        </div>
    </div>    
  )
}

export default AboutUs