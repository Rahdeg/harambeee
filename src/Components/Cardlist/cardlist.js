import React from 'react'
import Card from '../Card/card'
import { food } from '../foodlist/foodlist'
import "./cardlist.css"

const cardlist = (props) => {
    const foodarray=
        food.map((user,i)=>{

            return <Card name={food[i].name} descp={food[i].descp} id={food[i].id} image={food[i].img} amount={food[i].amount} />;
            
            
        })
    
  return (
    <div className='cardlist'>
    {foodarray}
    </div>
  )
}

export default cardlist