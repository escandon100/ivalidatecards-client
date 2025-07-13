import React from 'react'
import Card from "../card/card"
import cards from "../../lib/cards"
import "./buy.scss"

const Buy = () => {

   
  return (
    <div className='buy'>
      <div className="heading">
        <h1>Purchase Or Validate</h1>
        <p>Select a gift card to purchase or validate</p>
      </div>
      <div className="wrapper">
        {cards.map((card) => {
        return  <Card key = {card.id} card = {card} />
        })}
      </div> 
 
    </div>
  )
}

export default Buy
