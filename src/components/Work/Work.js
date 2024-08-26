import Elite1 from './proyects/portadaElite.png'
import Elite2 from './proyects/moreElite.png'
import Elite3 from './proyects/moreElites.png'
import Transport1 from './proyects/portadaTransporte.png'
import Transport2 from './proyects/crudTransporte.png'
import Transport3 from './proyects/loginTransporte.png'
import Verduras1 from './proyects/portadaVerduras.png'
import Verduras2 from './proyects/verduras1.png'
import Verduras3 from './proyects/verduras2.png'
import Verduras4 from './proyects/verduras3.png'
import Seguro1 from './proyects/portadaSeguro.png'
import Seguro2 from './proyects/Seguro1.png'
import Seguro3 from './proyects/Seguro2.png'
import React, { useState, useEffect } from "react";

import './work.css'

export default function Work() {

    const [currentTransportImage, setCurrentTransportImage] = useState(Transport1);
    const [fadeTransport, setFadeTransport] = useState(true);
    const [currentEliteImage, setCurrentEliteImage] = useState(Elite1);
    const [fadeElite, setFadeElite] = useState(true);
    const [currentVerduraImage, setCurrentVerduraImage] = useState(Verduras1);
    const [fadeVerdura, setFadeVerdura] = useState(true);
    const [currentSeguroImage, setCurrentSeguroImage] = useState(Seguro1);
    const [fadeSeguro, setFadeSeguro] = useState(true);

    const transportImages = [Transport1, Transport2, Transport3];
    const eliteImages = [Elite1, Elite2, Elite3];
    const verduraImages = [Verduras1, Verduras2, Verduras3, Verduras4];
    const seguroImages = [Seguro1, Seguro2, Seguro3];
    let transportIndex = 0;
    let eliteIndex = 0;
    let verduraIndex = 0;
    let seguroIndex = 0;

    useEffect(() => {
        const transportInterval = setInterval(() => {
            setFadeTransport(false);
            setTimeout(() => {
                transportIndex = (transportIndex + 1) % transportImages.length;
                setCurrentTransportImage(transportImages[transportIndex]);
                setFadeTransport(true);
            }, 500);
        }, 2000);

        const eliteInterval = setInterval(() => {
            setFadeElite(false);
            setTimeout(() => {
                eliteIndex = (eliteIndex + 1) % eliteImages.length;
                setCurrentEliteImage(eliteImages[eliteIndex]);
                setFadeElite(true);
            }, 500);
        }, 2000);

        const verdurasInterval = setInterval(() => {
            setFadeVerdura(false);
            setTimeout(() => {
                verduraIndex = (verduraIndex + 1) % verduraImages.length;
                setCurrentVerduraImage(verduraImages[verduraIndex]);
                setFadeVerdura(true);
            }, 500);
        }, 2000);

        const segurosInterval = setInterval(() => {
            setFadeSeguro(false);
            setTimeout(() => {
                seguroIndex = (seguroIndex + 1) % seguroImages.length;
                setCurrentSeguroImage(seguroImages[seguroIndex]);
                setFadeSeguro(true);
            }, 500);
        }, 2000);

        return () => {
            clearInterval(transportInterval);
            clearInterval(eliteInterval);
            clearInterval(verdurasInterval);
            clearInterval(segurosInterval);
        };
    }, []);
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
                        <img
                            src={currentEliteImage}
                            alt="img"
                            className={`image-transition ${fadeElite ? "fade-in" : "fade-out"}`}
                        />
                        <div className="proyect-description">
                            <h2>Elite Page</h2>
                            <p>
                                Realicé un rediseño de una página de ventas de terreno para mejorar el uso de CSS.
                            </p>
                            <button className="button-28">
                                <a href="https://github.com/BrokenDonut/Elite" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> Code
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="program">
                        <img
                            src={currentTransportImage}
                            alt="img"
                            className={`image-transition ${fadeTransport ? "fade-in" : "fade-out"}`}
                        />
                        <div className="proyect-description">
                            <h2>Transporte</h2>
                            <p>
                                Usando Spring realicé el diseño y la conexión de base de datos con
                                MySQL.
                            </p>
                            <button className="button-28">
                                <a
                                    href="https://github.com/BrokenDonut/TransporteLogin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github"></i> Code
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="program">
                        <img
                            src={currentVerduraImage}
                            alt="img"
                            className={`image-transition ${fadeVerdura ? "fade-in" : "fade-out"}`}
                        />
                        <div className="proyect-description">
                            <h2>Tienda Virtual</h2>
                            <p>Usando solo elementos de diseño CSS para poder diseñar una pagina de ventas de verduras.</p>
                            <button className="button-28">
                                <a href="https://github.com/BrokenDonut/WendysEduardo" target="_blank">
                                    <i className="fab fa-github"></i> Code
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="program">
                    <img
                            src={currentSeguroImage}
                            alt="img"
                            className={`image-transition ${fadeSeguro ? "fade-in" : "fade-out"}`}
                        />
                        <div className="proyect-description">
                            <h2>Seguro Vehicular</h2>
                            <p>Con conexion a una API para poder realizar el funcionamiento de una pagina de compra de seguros.</p>
                            <button className="button-28">
                                <a href="https://github.com/BrokenDonut/Seguro" target="_blank">
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