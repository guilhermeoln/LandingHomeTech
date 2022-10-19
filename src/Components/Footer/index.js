import "./footer.css";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="containerFooter">
            <div className="conteudoFooter">
                <img src="https://i.postimg.cc/QN10y07T/LOGO-HOMETECH-removebg-preview-1.png" alt="logo-footer" className="logoFooter"/>
                <div className="navFooter">
                    <a href="#home">Home</a>
                    <a href="#about">Sobre a Home Tech</a>
                    <a href="#services">Serviços</a>
                    <a href="#contact">Contato</a>
                </div>
                <img src="https://i.postimg.cc/1zDQdBvC/Divider.png" alt="divisao" className="divisaoFooter"/>
                <div className="containerSocialMediasFooter">
                    <div className="conteudoSocialMedia">
                        <a href="https://www.instagram.com/home.tech_/" target="_blank">
                            <FaInstagram className="iconFooter"/>
                        </a>
                        <a href="">
                            <FaFacebookF className="iconFooter"/>
                        </a>
                    </div>
                    <div className="conteudoInfoFooter">
                        <p>© 2022 Home Tech. Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </div>
    );
}