import './about.css'

export default function About() {
    return (
        <div className="container-about" id="about">
            <div className="about-second">
                <div className="about-me">
                    <div className="about-title">
                        <h1>About Me</h1>
                        <h1 className="punto">.</h1>
                    </div>
                    <p className="about-parrafo">¡Hola! Mi nombre es Ronaldo Chulluncuy, soy un desarrollador Full Stack que radica en Lima, Perú.
                        Actualmente soy estudiante de la carrera de Desarrollo de Sistemas y me apasiona crear diversas
                        interfaces con conexión a bases de datos o simples páginas planas como portfolios. Mis habilidades
                        más fuertes son HTML, CSS, JavaScript y MySQL. Además, siempre estoy en busca de oportunidades para
                        desarrollarme profesionalmente, como aprender nuevas tecnologías y herramientas. También trabajo con
                        frameworks como React, Angular y Spring.</p>
                </div>
                <div className="formation">
                    <div>
                        <h2>Educación:</h2>
                        <div className="education">
                            <p className="asterisco">*</p>
                            <div className="education-text">
                                <h4>Desarrollador Sistemas</h4>
                                <p>Idat</p>
                                <p>2023 - Actualidad</p>
                            </div>
                        </div>
                        <div className="education">
                            <p className="asterisco">*</p>
                            <div className="education-text">
                                <h4>FrontEnd Developer</h4>
                                <p>CoderHouse</p>
                                <p>2022 - 2023</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="tecnology">
                        <div className="tecnology-skills">
                            <h2>Tecnologias:</h2>
                            <div className="skills">
                                <div className="skills-1">
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/JavaScript-logo.png" alt="javascript"></img>
                                        <h3>JavaScript</h3>
                                    </div>
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/css.webp" alt="css"></img>
                                        <h3>CSS</h3>
                                    </div>
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/html.png" alt="html"></img>
                                        <h3>HTML</h3>
                                    </div>
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/python.svg" alt="python"></img>
                                        <h3>Python</h3>
                                    </div>
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/c.png" alt="c#"></img>
                                        <h3>C#</h3>
                                    </div>
                                    
                                </div>
                                <div className="skills-2">
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/angular.webp" alt="angular"></img>
                                        <h3>Angular</h3>
                                    </div>
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/React.webp" alt="react"></img>
                                        <h3>React</h3>
                                    </div>
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/Mysql.png" alt="mysql"></img>
                                        <h3>MySQL</h3>
                                    </div>
                                    <div className="section-skill">
                                        <img src="/assets/icon-tech/sql.svg" alt="sql"></img>
                                        <h3>SQL Server</h3>
                                    </div>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}