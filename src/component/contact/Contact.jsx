import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_sd9igec',
        'template_qsfbuek',
        form.current,
        '5LTNPOV7LfnjpX5VS'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h1>CONTACT ME</h1>
      <h2>I'LL BE GLAD TO ANSWER YOUR QUESTIONS</h2>
      <div className='message_mail'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='name'>
            <input
              type='text'
              placeholder='NAME'
              name='name'
              style={{ width: 550, height: 50 }}
            />
          </div>
          <div className='email'>
            <input
              type='email'
              placeholder='email'
              name='email'
              required
              style={{ width: 550, height: 50 }}
            />
          </div>
          <div className='subject'>
            <input
              type='text'
              placeholder='Subject'
              name='subject'
              style={{ width: 550, height: 50 }}
            />
          </div>
          <div className='messgae'>
            <textarea
              placeholder='Message'
              name='message'
              style={{ width: 550, height: 200 }}
            />
          </div>
          <div>
            <input
              type='submit'
              className='btn btn-primary'
              name='submit'
              value='SEND MESSAGE'
            />
          </div>
        </form>
      </div>
      <div className='message__icons'>
        <a href='https://www.facebook.com/profile.php?id=100036721652365'>
          <AiFillFacebook />
        </a>
        <a href='https://www.instagram.com/jaan_niran_its_me/'>
          <AiOutlineInstagram />
        </a>
        <a href='https://github.com/Niranjan-2807'>
          <AiOutlineGithub />
        </a>
        <a href='https://www.linkedin.com/in/niranjan2807/'>
          <AiOutlineLinkedin />
        </a>
      </div>
    </section>
  )
}

export default Contact
