import React from 'react'
import "./about.css"
import aboutImg from "../../components/assets/images/about.svg"

function About() {
  return (
    <div className='about container'>
      <div className="about__left">
        <img className='about__left__img' src={aboutImg} alt="" />
      </div>
      <div className="about__right">
        <p className="about__desc">About US</p>
        <h1 className="about__title">Food Stalls with Persons but  to  Product marketing plane
         catlogues etc to. </h1>
        <p className="about__text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
         equipment  make your marketing plane Effective.</p>

         <button className='about__btn'>Read More</button>
      </div>
    </div>
  )
}

export default About