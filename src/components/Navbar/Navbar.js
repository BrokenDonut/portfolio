import React, { useState, useEffect } from 'react';
import './navbar.css'; // Asegúrate de importar el archivo CSS

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className={`container-navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="tittle">
                    <div className="tittle-decor">
                        <h1>Ronaldo</h1><h1 className="punto">.</h1>
                    </div>
                </div>
                <ul className={`option ${menuOpen ? 'show' : ''}`}>
                    <a className='option-scroll' href="#perfil">Perfil</a>
                    <a className='option-scroll' href="#about">Habilidades</a>
                    <a className='option-scroll' href="#work">Proyectos</a>
                    <a className='option-scroll' href="#contact">Contacto</a>
                </ul>
                <button 
                    className={`burger-menu ${menuOpen ? 'open' : ''}`} 
                    onClick={handleMenuClick}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;





