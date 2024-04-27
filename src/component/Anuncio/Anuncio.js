
import './Anuncio.css';
import { AiTwotoneRocket } from "react-icons/ai";

export const Anuncio = () => {
    return (
        <div className='content-fluid'>
            <div className='card-anuncio'>
            <AiTwotoneRocket className='icon-anuncio'/>
                <span className='titulo-anuncio'>Actualizando...</span>
                <div className='mensaje-anuncio'>
                    <p>Estamos realizando una actualización a la plataforma para mejorar tu experiencia. Gracias por tu paciencia, volveremos pronto.</p>
                </div>
            </div>
        </div>
    )
};

export default Anuncio;
