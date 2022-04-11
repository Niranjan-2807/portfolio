import React from 'react'
import './experience.css'
import ap from '../../assets/ap.png'
import holo from '../../assets/holo.jpg'
import apple from '../../assets/apple.png'
const Experience = () => {
  return (
    <section id='experience'>
      <h1>Experience</h1>
      <div className='experinece_box'>
        <ul>
          <li>
            <p >Adorabel pharmacy</p>
            <br />
            A website for a pHarmacy made as a mini project for my college
            <br />
            <br />
            <p>website link:</p>
            <code>https://niranjan-2807.github.io/AdorablePharmacy/</code>
            <br />
            <br />
            <img src={ap} alt='ap' />
            <br />
            <button>
              <a href='https://niranjan-2807.github.io/AdorablePharmacy/'>
                click here
              </a>
            </button>
          </li>
          <li>
            <p >Apple Clone</p>
            <img src={apple} alt='apple' />
            <br />
            <br />
            A static clone of official Apple website
            <br />
            <br />
            <p>website link:</p>
            <code>https://niranjan-2807.github.io/applewebsiteclone/</code>
            <br />
            <br />
            <button>
              <a href='https://niranjan-2807.github.io/applewebsiteclone/'>
                click here
              </a>
            </button>
          </li>
          <li>
            <p >HoloGraphic Communication</p>
            <br />
            <p>
              Holographic communication is going to be the future of
              telecomunication, it can also be used for educational purposes as
              the schools are most likely to convert their classes to ultimate
              educational experience.
            </p>
            <br />
            <br />
            <img src={holo} alt='holo' />
          </li>
          <li>
            <p>Contact list</p>
            <img src={ap} alt='ap' />
            <br />
            <br />
            A website for a pHarmacy made as a mini project for my college
            <br />
            <br />
            <p>website link:</p>
            <code>https://niranjan-2807.github.io/AdorablePharmacy/</code>
            <br />
            <br />
            <button className='btn'>
              <a href='https://niranjan-2807.github.io/AdorablePharmacy/'>
                click here
              </a>
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
