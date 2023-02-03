import React from "react";
import cardBack from "../assets/empty_card_frame.png"
import dragonsheen from "../assets/dragonsheen.jpeg"

import "./Card.css";

//turn this into a folder full of components for card modes.
export default function Card(props) {
  
  return (
    //show view with injected data
    <div className="Card-show">
      <div className="Card">
        <div className="Card-header">
          <div className="Card-name"> {">"}Dragonsheen</div>
          <div className="Card-cost-container">
            <div className="Card-cost-shape"></div>
            <div className="Card-cost">1</div>
          </div>
        </div>
        <img className="Card-img" src={dragonsheen} />
        <div className="Card-power">3</div>
      </div>
    </div>

    //empty view
    // <img 
    // className="Card-empty"
    // mode="EMPTY"
    // src={cardBack}
    // alt="Card Back"
    // />
  );
}