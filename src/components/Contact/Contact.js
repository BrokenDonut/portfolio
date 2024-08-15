import Form from '../Form/Form';
import './contact.css'

export default function Contact() {
    return (
        <div className='container-contact' id='contact'>
            <div className='contact-second'>
                <div className='contact-info'>
                    <div className='info-tittle'>
                        <h1>Call Me</h1>
                        <h1 className="punto">.</h1>
                    </div>
                    <h3>Cualquier consulta para trabajo o proyectos dejo mis medios </h3>
                    <h3>de comunicacion que mas uso</h3>
                    <div className='info-icon'>
                        <p><i className="fas fa-envelope"></i> ronaldochulluncuy@gmail.com</p>
                        <p><i className="fas fa-map-marker-alt"></i> Lima - Perú</p>
                        <p><i className="fab fa-whatsapp"></i> +51 907598519</p>
                        <div className='icon-contact'>
                            <a href="https://github.com/BrokenDonut" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ronaldo-le-067a70234/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <Form></Form>
                </div>
            </div>
        </div>
    );
}