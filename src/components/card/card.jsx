import React from 'react';
import "./card.scss";
import PurchaseOrValidate from '../purchaseOrValidate/purchaseOrValidate'



const Card = ({card}) => {
  return (
    <div className='card'>
        <h3>{card.name}</h3> 
        <img src={card.img} alt="" />
        <PurchaseOrValidate card = {card}/>
    </div>
  )
}

export default Card
