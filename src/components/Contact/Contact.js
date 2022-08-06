import './Contact.css';
import { BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Contact = ({contactRef}) => {


    const whatsappLink = () => {
        window.open('https://api.whatsapp.com/send?phone=1130931945', '_blank')
    }

    const facebookLink = () => {
        window.open('https://www.facebook.com/sasha.rodcar', '_blank')
    }

    const linkedinLink = () => {
        window.open('https://www.linkedin.com/in/sasha-rodriguez-carlomagno/', '_blank')
    }

    const instagramLink = () => {
        window.open('https://instagram.com/sasha.r.c', '_blank')
    }

    // onSubmit={sendEmail}
    return (
        <div className='Contact'>
            <div className='ContContainer'>
                <div className='ContInfo'>
                    <h1>Contactame</h1>
                    <h2>Dejame un mensaje desde acá o hablame a mis redes sociales si necesitás
                        comunicarte conmigo.
                    </h2>
                    <div className="IconsFooter">
                        <BsLinkedin onClick={linkedinLink} className="Icon"/> <BsFacebook onClick={facebookLink} className="Icon"/> <BsInstagram onClick={instagramLink} className="Icon"/> 
                        <BsWhatsapp onClick={whatsappLink} className="Icon"/>
                    </div>
                </div>
                <div className="ContactMe" ref={contactRef} >
                    <form className="ContactForm">
                        <label>Nombre*</label>
                        <input type="text" id="userName" name="user_name" placeholder="Escribe tu nombre aquí..." required/>
                        <label>Email*</label>
                        <input type="email" id="userEmail" name="user_email" placeholder="Escribe tu correo aquí..." required/>
                        <label>Teléfono</label>
                        <input type="phone" id="userPhone" name="user_phone" placeholder="Ingrese su teléfono (opcional)" />
                        <label>Mensaje*</label>
                        <textarea name="message" id="message"
                        rows={8}
                        placeholder="Cuéntame lo que necesitas..." required/>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;