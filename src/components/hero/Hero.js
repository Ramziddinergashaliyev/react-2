import React from 'react'
import "./hero.css"
import heroimg from "../../components/assets/images/CSmJnTefxM 1.svg" 

function Hero() {
  return (
    <div className='hero container'>
       <div className="hero__left">
           <h1 className="hero__title">Making time a good time by making food the good food.</h1>
           <p className="hero__desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
           <div className="hero__btns">
            <button className='hero_btn order__btn'>Order Now</button>
            <button className='hero_btn food__btn'>Food Details</button>
           </div>
       </div>
       <div className="hero__right">
        <img className='hero__right__img' src={heroimg} alt="" />
       </div>
    </div>
  )
}

export default Hero