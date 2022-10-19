import "./contact.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function SectionContact(){

    useEffect(() =>{
        Aos.init({ duration: 1000})
    },[])


    return(
        <div className="containerSectionContact">
            <div className="containerTextContact" data-aos="fade-right" id="contact">
                <div className="contentTitleContact">
                    <img src="https://i.postimg.cc/LskxkDft/supporticon.png" alt="titleContact" />
                    <h2>No que podemos te ajudar?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                <div className="contentTextContact">
                    <div className="cardContact">
                        <img src="https://i.postimg.cc/sgxGy43V/icon-Phone.png" alt="logophone" />
                        <p>Rua Torres Homem, Recife-PE</p>
                    </div>
                    <div className="cardContact">
                        <img src="https://i.postimg.cc/sgxGy43V/icon-Phone.png" alt="logophone"/>
                        <p className="phoneContact">(81) 98889-9353</p>
                    </div>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=5581988899353&text=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento" target="_blank" className="btnEnviarMensagem">
                    Enviar Mensagem
                </a>
            </div>
            <div className="containerImgContact" data-aos="fade-right">
                <img src="https://i.postimg.cc/HnkCdQHF/loho-hometech.png" alt="logo-home" />
            </div>
        </div>
    );
}