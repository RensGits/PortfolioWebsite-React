import emailjs from 'emailjs-com';
import React from 'react';
import './../ContactForm/ContactForm.css'

function ContactForm () {

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_rt762rs', 'template_oxljmnr', e.target, 'user_oljxlIoe3AvZ9Vm3eEJvm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
  } 

  return (
    <form className="contactForm" onSubmit={sendEmail}>
      
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className = 'formButton' type="submit" value="Send" />
    </form>
  );
}

export default ContactForm;