import "./initial.css"
import { useContext, useEffect } from "react";
import MyContext from '../../contexts/myContext';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function SectionInitial(){


    useEffect(() =>{
        Aos.init({ duration: 1000})
    },[])

    const {
        menuSandwich,
        setMenuSandwich
    }   = useContext(MyContext)

    return(
        <div className="containerSectionInitial" id="home">
            <div className="conteudoSandwich">
                {menuSandwich
                    ?
                <div className="menuSandwichOpen" data-aos="fade-down">
                    <a href="#home">Home</a>
                    <a href="#about">Sobre a loja</a>
                    <a href="#services">Serviços</a>
                    <a href="#contact">Contato</a>
                </div>
                    :
                ''
                }
            </div>
            <div className="conteudoInitial" data-aos="fade-right">
                <h1 className="titleInitial">HOME TECH</h1>
                <h2>Produtos eletrônicos e <span>tudo</span> para o seu <span>iPhone</span></h2>
                <a href="#about"><img src="https://i.postimg.cc/zBnb2Kp7/Vector-3.png" alt="logo-vermais" /></a>
            </div>
        </div>
    );
}