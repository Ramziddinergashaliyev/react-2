import React from 'react'
import { Navbar } from '../../static'
import "./navbar.css"
import img from "../../components/assets/images/navbar.svg"

function NavbarData() {

  const navbarItem = Navbar.map((nav) => {
    return <li className='navbar__list' key={nav.id}>
      <a className='navbar__link' href="#">{nav.title}</a>
    </li>
  })

  return (
    <div className='navbar container'>
      <div className='navbar__left'>
       <img src={img} alt="navbar__img" />
       <ul className='navbar__item'>
         {navbarItem}
       </ul>
      </div>
      <button className='navbar__btn'>Booking Now</button>
    </div>
  )
}

export default NavbarData