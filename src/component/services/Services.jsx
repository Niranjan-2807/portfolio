import React from 'react'
import './services.css'
import holovideo from '../../assets/holovideo2.mp4'
const Services = () => {
  return (
    <section id='services'>
      <video src={holovideo} autoPlay loop muted />
      <div className='content'>
        <h1>Idea</h1>

        <p>A HoloGraphic Communicator</p>
      </div>
    </section>
  )
}

export default Services