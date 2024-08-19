import Elite1 from './proyects/portadaElite.png'
import Elite2 from './proyects/moreElite.png'
import Elite3 from './proyects/moreElites.png'
import Transport1 from './proyects/portadaTransporte.png'
import Transport2 from './proyects/crudTransporte.png'
import Transport3 from './proyects/loginTransporte.png'
import './work.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Work() {
    return (
        <div className="container-proyect" id="work">
            <div className="proyect-second">
                <div className="proyect-title">
                    <div className="primary-title">
                        <h1>Projects</h1>
                        <h1 className="punto">.</h1>
                    </div>
                    <p className='parrafo-proyect'>Mi realizacion de trabajos como estudiante en Programacion usando diversos lengujes y frameware</p>
                </div>
                <div className="proyect-new">
                    <div className="program">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide><img src={Elite1} alt="img"></img></SwiperSlide>
                            <SwiperSlide><img src={Elite2} alt="img"></img></SwiperSlide>
                            <SwiperSlide><img src={Elite3} alt="img"></img></SwiperSlide>
                        </Swiper>
                        
                        <div className="proyect-description">
                            <h2>Elite Page</h2>
                            <p>Realize un rediseño de una pagina de ventas de terreno para consigo poder realizar el buen uso de CSS.</p>
                            <button className="button-28">
                                <a href="https://github.com/BrokenDonut/Elite" target="_blank">
                                    <i className="fab fa-github"></i> Code
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="program">
                    <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide><img src={Transport1} alt="img"></img></SwiperSlide>
                            <SwiperSlide><img src={Transport2} alt="img"></img></SwiperSlide>
                            <SwiperSlide><img src={Transport3} alt="img"></img></SwiperSlide>
                        </Swiper>
                        <div className="proyect-description">
                            <h2>Transporte</h2>
                            <p>Usando Spring realize el diseño y la conexion de base de datos con MySQL.</p>
                            <button className="button-28">
                                <a href="https://github.com/BrokenDonut/TransporteLogin" target="_blank">
                                    <i className="fab fa-github"></i> Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sub-proyect">
                    <h2>Y mas proyectos por delante...</h2>
                </div>
            </div>
        </div>
    );
}