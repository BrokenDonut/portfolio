import React, { useState, useEffect } from 'react';
import './navbar.css'; // Asegúrate de importar el archivo CSS

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className={`container-navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="tittle">
                    <div className="tittle-decor">
                        <h1>Ronaldo</h1><h1 className="punto">.</h1>
                    </div>
                </div>
                <ul className="option">
                    <a href="#perfil">Perfil</a>
                    <a href="#about">Habilidades</a>
                    <a href="#work">Proyectos</a>
                    <a href="#contact">Contacto</a>
                </ul>
                <button className="burger-menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;



