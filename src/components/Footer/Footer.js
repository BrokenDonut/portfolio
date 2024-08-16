import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer-name'>
                <p>Portfolio hecho por </p>
                <p className='name'> Ronaldo Chulluncuy</p>
            </div>
            <div className='footer-icon'>
                <a href="https://github.com/BrokenDonut" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ronaldo-le-067a70234/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
}