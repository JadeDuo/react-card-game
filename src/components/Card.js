import React from "react";
import cardBack from "../assets/empty_card_frame.png"


export default function Card(props) {
  
  return (
    
    <img 
    className="card"
    src={cardBack}
    alt="Card Back"
    />
  );
}