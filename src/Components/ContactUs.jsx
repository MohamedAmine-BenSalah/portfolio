import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/Contact.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact_container' >

    <form ref={form} onSubmit={sendEmail}>
      <div className='contact_form' >
      <TextField
          id="standard-textarea"
          label="Name"
          multiline
          name="user_name"
          variant="standard"
        />
      <TextField
          id="standard-textarea"
          label="email"
          multiline
          variant="standard"
          name="user_email"
        />
      <TextField
      multiline={true}
      rows={10}
      name="message"
      label="Message"
      autoComplete="off"
      variant="outlined"
    />
      <input className='buttonS' type="submit" value="Send" />
    </div>
    </form>
    </div>
  );
};