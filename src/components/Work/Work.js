import Elite1 from './proyects/portadaElite.png'

import Transport1 from './proyects/portadaTransporte.png'

import './work.css'

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
                        <img src={Elite1} alt="img"></img>
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
                        <img src={Transport1} alt="img"></img>
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