import Icon from './icon.jpeg'
import Cv from './Ronaldo_Chulluncuy_CV.pdf'
import './head.css'
import Typewriter from 'typewriter-effect';

export default function Head() {
    return (
        <div className="head-container" id="perfil">
            <div className="head-second">
                <div className="head-text">
                    <h3>Hola, mi nombre es Ronaldo &#128075;</h3>
                    <Typewriter
                        options={{
                            strings: ['Back End', 'Front End', 'Full Stack'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <h3>Me Aficiona el diseño y creacion de aplicaiones web</h3>
                    <div className="head-botom">
                        <a href={Cv} download>
                            <button className="button-28">CV</button>
                        </a>
                    </div>
                </div>
                <div className="head-img">
                    <div className="container-img">
                        <img src={Icon} alt="img"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}