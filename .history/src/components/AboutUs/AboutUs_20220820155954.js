import React from 'react'

import Image1 from '../images/batman.jpg'
import Image2 from '../images/spiderman.jpg'
import Image3 from '../images/narutochacra.jpg'

export const AboutUs = () => {
  return (
    <div>
        <div className="container-fluid pb-3 my-3 row impressionLight">
          <h2 className="text-center mx-auto pt-1 mt-1 cardTitle">SOLO LO MEJOR AL ALCANCE DE TU MANO</h2>
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
          <div className="container-fluid mx-auto pt-1 mt-1 col-md-6">
          <div className="card text-bg-warning mb-3" style={{maxWidth: 920}}>
            <div className="card-header">
              <h3>Siempre pensando en lo que querès</h3>
            </div>
            <div className="card-body">
                <h5 className="card-title">En Asgard pensamos en vos </h5>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!
                </p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!
                </p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!
                </p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!
                </p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore debitis culpa nostrum optio? Necessitatibus, ex, incidunt, adipisci omnis soluta exercitationem placeat ipsum quas commodi reiciendis numquam aliquid deleniti veritatis!
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default AboutUs