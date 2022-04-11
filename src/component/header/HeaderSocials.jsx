import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/niranjan2807/' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/Niranjan-2807' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://www.instagram.com/jaan_niran_its_me' target='_blank'>
        <BsInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials
