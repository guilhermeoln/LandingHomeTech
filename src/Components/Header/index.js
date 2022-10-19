import "./header.css";
import { AiOutlineMenu,  AiOutlineClose} from 'react-icons/ai'; 
import { useState, useContext } from 'react';
import MyContext from '../../contexts/myContext';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';


export default function Header(){


    const {
        menuSandwich,
        setMenuSandwich
    }   = useContext(MyContext)



    function exibirMenu(){
        setMenuSandwich(true);
    }

    function esconderMenu(){
        setMenuSandwich(false);
    }

    return(
        <header>
            <div className="containerLogoHeader">
                <img src="https://i.postimg.cc/QN10y07T/LOGO-HOMETECH-removebg-preview-1.png" alt="logo-header"/>
            </div>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">Sobre a Home Tech</a>
                <a href="#services">Serviços</a>
                <a href="#contact">Contato</a>
            </nav>
            <div className="containerSocialHeader">
                <a href="https://www.instagram.com/home.tech_/" target="_blank">
                    <FaInstagram className="iconHeader"/>
                </a>
                <a href="">
                    <FaFacebookF className="iconHeader"/>
                </a>
            </div>
            <div className="containerBtnHeader">
                {menuSandwich 
                    ? 
                <AiOutlineClose className="iconMenuHeader" onClick={ esconderMenu}/> 
                    : 
                <AiOutlineMenu className="iconMenuHeader" onClick={ exibirMenu}/>}
            </div>
        </header>
    );
}