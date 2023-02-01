import React from "react";
import cardBack from "../assets/card_back.png"

//also import scss file once you style things

export default function Card(props) {
  
  return (
    
    <img 
    className="card"
    src={cardBack}
    alt="Card Back"
    />
  );
}