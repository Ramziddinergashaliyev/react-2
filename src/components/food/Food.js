import React from 'react'
import "./food.css"
import { FOOD } from '../../static'

function Food() {

  const foodCard = FOOD.map((data) => {
    return  <div key={data.id} className="food__card">
              <img src={data.img} alt="" />
              <h2 className='food__card__title'>{data.name}</h2>
              <p className='food__card__desc'>{data.title}</p>
            </div>
  })


  return (
    <div className='food container'>
       <p className="food__desc">Features</p>
       <h2 className="food__title">Food with a New Passion</h2>
       <div className="food__cards">
         {foodCard}
       </div>
    </div>
  )
}

export default Food