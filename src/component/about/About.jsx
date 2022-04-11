import React from 'react'
import './about.css'
import niranjan from '../../assets/nirapng.png'
import { DiJava } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { GiGraduateCap } from 'react-icons/gi'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { AiFillGithub } from 'react-icons/ai'
const about = () => {
  return (
    <section id='about'>
      <h1>About me</h1>
      <div className='about_me'>
        <div className='graduation'>
          <p>Graduation</p>
          <li>
            <GiGraduateCap /> UG - DHANLAKSHMI COLLEGE OF ENGINEERING - cgpa -
            8.1
          </li>
          <li>
            <GiGraduateCap /> HSC -Shri Natesan Vidyasala Matriculation Higher
            Secondary School - score - 74%
          </li>
          <li>
            <GiGraduateCap /> SSLC -Shri Natesan Vidyasala Matriculation Higher
            Secondary School- score - 87%
          </li>
        </div>
        <div className='tech'>
          <p>Tech</p>
          <li id='tech'>
            <DiJava />
          </li>
          <li id='tech'>C</li>
          <li id='tech'>
            <FaReact />
          </li>
          <li id='tech'>
            <AiOutlineHtml5 />
          </li>
          <li id='tech'>
            <DiCss3 />
          </li>
          <li id='tech'>
            <AiFillGithub />
          </li>
        </div>
        <div className='certification'>
          <p>Certification</p>
          <li>html5</li>
          <li>CSS3</li>
          <li>git & github</li>
          <li>Bootstrap</li>
          <li>React Js (router, redux,hooks)</li>
        </div>
      </div>
      <div className='imgdiv'>
        <div className='img_back'>
          <img src={niranjan} alt='' />
        </div>
      </div>
    </section>
  )
}

export default about
