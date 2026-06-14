import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    const hasNameError = name.trim() === '';
    const hasEmailError = email.trim() === '';
    const hasMessageError = message.trim() === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="contact-copy">
            <span className="section-kicker">Let's build something</span>
            <h1>Contact Me</h1>
            <p>Got a project waiting to be realized? Share a few details and I will get back to you soon.</p>
            <div className="contact-meta">
              <span>Available for freelance work</span>
              <span>Replies via email</span>
            </div>
          </div>
          <Box
            component="form"
            action="https://formsubmit.co/provakor.konik@gmail.com"
            method="POST"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <input type="hidden" name="_subject" value="New portfolio contact form submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" />
            <div className='form-flex'>
              <TextField
                required
                id="contact-name"
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                name="contact"
                label="Email / Phone"
                placeholder="How can I reach you?"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="contact-message"
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              variant="outlined"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <div className="form-footer">
              <p>Your message will be sent directly to provakor.konik@gmail.com.</p>
              <Button variant="contained" endIcon={<SendIcon />} type="submit">
                Send Message
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
