import './style.css'
import { Carousel } from 'react-responsive-carousel';

function Carrusel() {
    return (
        <section className='contenedor'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " >
                <div className="carousel-inner home_style">
                    <div className="carousel-item active tamano">
                        <img src="slider-1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item tamano">
                        <img src="gorros2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item tamano">
                        <img src="logo512.png" className="d-block w-100" alt="..." />
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
        </section>

    )
};

export default Carrusel;