import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xbs5imi', 'contact_form', e.target, 'user_zBIzBZnCIKPC7yoz2o4dd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Nombre / name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensaje / Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div> 
  );
}