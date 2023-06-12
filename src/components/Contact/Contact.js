/*import React, { Component } from 'react'*/
/*import React, { Component } from 'react';*/
/*import emailjs, { init } from "@emailjs/browser";*/
import React, { useRef } from 'react';
import "../../contact.css"
import emailjs from '@emailjs/browser';


function App() {
  const form = useRef();

  // const success = <p>thank you for sending us a message</p>;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fe7hj53", 
        "React_Contact_Form", 
        form.current, 
        "9ixhZK6xDjvFJ2RP8"
      )
      .then(
        (result) => {
          alert(`mensaje enviado... ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h1>Formulario de contacto</h1>
      <form className='cf' ref={form} onSubmit={sendEmail}>
        <div className='half left cf'>
          <input type='text' placeholder='Nombre' name='user_name' />
          <input type='email' placeholder='Correo electronico' name='user_email' />
        </div>
        <div className='half right cf'>
          <textarea name='message' type='text' placeholder='Mensaje'></textarea>
        </div>
        <input type='submit' value='Enviar' id='input-submit' />
      </form>
    </div>
  );
}

export default App;