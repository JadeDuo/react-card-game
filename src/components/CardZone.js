import React from "react";
import Card from "./Card";
//also import scss file once you style things

export default function CardZone(props) {
  
  return (
    <div className="card-zone">
      <div className="card-zone-top">
        <Card 
        position="1"
        />
        <Card 
        position="2"
        />
      </div>
      <div className="card-zone-bottom">
        <Card 
        position="3"
        />
        <Card 
        position="4"
        />
      </div>
    </div>
  );
}
