import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/hrithic.png'
import niranjan from '../../assets/nirapng.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello im </h5>
        <h1>niranjan</h1>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={niranjan} alt='niranjan' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
