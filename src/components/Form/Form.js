import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import './form.css'

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qcrvau6', 'template_8yhy29s', form.current, 'yHXiM2tpXRP_NnjmQ')
      .then((result) => {
        console.log(result.text);
        alert('Correo enviado correctamente');
      }, (error) => {
        console.log(error.text);
        alert('Error al enviar el correo');
      });
  };

  return (
    <div className="container-form">
      <div className="form-second">
        <form ref={form} onSubmit={sendEmail} className="form-contact">
          <label className="form-label">Nombre</label>
          <input className="form-input" placeholder="Nombre" type="text" name="user_name" required />

          <label className="form-label">Correo electrónico</label>
          <input className="form-input" placeholder="Correo" type="email" name="user_email" required />

          <label className="form-label">Mensaje</label>
          <textarea className="form-input form-area" placeholder="Mensaje" name="message" required />

          <button type="submit" className="button-28 form-buttom">Enviar</button>
        </form>
      </div>
    </div>

  );
};
export default Form;