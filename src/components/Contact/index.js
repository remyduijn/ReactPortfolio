import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormH3,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactElements';


const Contact = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sqvefqk', 'template_aj6rbxi', form.current, 'Spv2Ca5aaVjwBxrcf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Thank you for your message!");
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Remy Duijn</Icon>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
              <FormH1>Fancy a chat?</FormH1>
              <FormH3>Get in touch to discuss what we could do for each other. My personal email is <u class="email">remy.duijn@gmail.com</u></FormH3>
             
              <FormLabel htmlFor='for'><label>Email</label></FormLabel>
              <FormInput type='email' name="from_email" required />

              <FormLabel htmlFor='for'><label>Message</label></FormLabel>
              <textarea type='text' name="message" required />

              <FormButton type='submit'>Send Message</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
