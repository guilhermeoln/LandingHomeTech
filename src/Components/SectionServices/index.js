import "./services.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function SectionServices(){

    useEffect(() =>{
        Aos.init({ duration: 1000})
    },[])


    return(
        <div className="containerSectionServices">
            <div className="containerServicesCard" id="services" data-aos="fade-right">
                <div className="rowServicesCard">
                    <div className="cardServices">
                        <div className="titleCardServices">
                            <img src="https://i.postimg.cc/XYFY38jr/ICONE-IPHONE-2.png" alt="iconServices" />
                        </div>
                        <div className="textCardServices">
                            <h3>Iphones Seminovos</h3>
                            <p>
                                At purus fames mauris, ornare mattis nec. 
                                Nulla ut lectus in ultrices rhoncus honcus nisl ultrices vestibulum.
                            </p>
                        </div>
                    </div>
                    <div className="cardServices">
                        <div className="titleCardServices">
                            <img src="https://i.postimg.cc/15d8yXDj/ICONE-CELULAR1.png" alt="iconServices" />
                        </div>
                        <div className="textCardServices">
                        <h3>Iphones Lacrados</h3>
                            <p>
                                At purus fames mauris, ornare mattis nec. 
                                Nulla ut lectus in ultrices rhoncus honcus nisl ultrices vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rowServicesCard">
                <div className="cardServices">
                        <div className="titleCardServices">
                            <img src="https://i.postimg.cc/L4CXV5Q8/Group-3.png" alt="iconServices" />
                        </div>
                        <div className="textCardServices">
                            <h3>Assistência Técnica</h3>
                            <p>
                                At purus fames mauris, ornare mattis nec. 
                                Nulla ut lectus in ultrices rhoncus honcus nisl ultrices vestibulum.
                            </p>
                        </div>
                    </div>
                    <div className="cardServices">
                        <div className="titleCardServices">
                            <img src="https://i.postimg.cc/J4rnNJ5g/ICONE-DO-RELOGIO.png" alt="iconServices" />
                        </div>
                        <div className="textCardServices">
                        <h3>Acessórios</h3>
                            <p>
                                At purus fames mauris, ornare mattis nec. 
                                Nulla ut lectus in ultrices rhoncus honcus nisl ultrices vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerTextCard" data-aos="fade-right">
                <h2>Serviços especializados para o seu celular</h2>
                <p>
                    Viverra volutpat amet rhoncus urna, ullamcorper interdum non condimentum. Aliquet eget morbi urna a, at. 
                    Et consequat enim faucibus diam lectus ullamcorper est pharetra, sagittis. 
                    A varius cursus scelerisque ut. 
                    Amet.
                </p>
                <a href="https://api.whatsapp.com/send/?phone=5581988899353&text=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento">
                    Fale com a Home Tech
                </a>
            </div>
        </div>
    );
}