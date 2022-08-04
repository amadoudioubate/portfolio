import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  

  const sendEmail = e => {
    console.log(name+ " " +email+ " " +message);
    e.preventDefault();

    emailjs.sendForm('service_mg3md84', 'template_kfso1nw', form.current, '_b7Xx-ZoHEwvobxQl')
     .then(result => {
        console.log(result.text);
      }).catch(err => {
        console.log(err.text);
      });

      setName('');
      setEmail('');
      setMessage('');
      
      
  }

  return (
    <section className='contact' id='contact_me'>
      
      <form  className='contact_form' ref={form} onSubmit={(e) => sendEmail(e)}>
        <h2 className='form_title'>Contact</h2>
        
        <div className='form_group'>
          <label htmlFor='name'>Nom et prénom<span>*</span></label>
          <input type="text" id="name" name='name' placeholder='Saisissez votre nom et prénom *' 
          onChange={(e) => setName(e.target.value)} value={name} required/>
        </div>
       
        <div className='form_group'>
          <label htmlFor='email'>Email<span>*</span></label>
          <input type="email" id='email' name='email' placeholder='Saisissez votre e-mail *' 
          onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>
        <div className="form_group">
          <label htmlFor="message">Message<span>*</span></label>
          <textarea name="message" id="message" placeholder='Saisissez votre message *'
          onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
        </div>
        <div className='container_btn'>
          <button className="btn_send">Envoyer</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;