import React from "react";
import CardZone from "./CardZone";
import Location from "./Location";
//also import scss file once you style things

export default function Lane(props) {
  
  return (
    <div className="Lane">
      <CardZone
    player="p2-opp"
    />

      <Location />

      <CardZone
    player="p1-self"
    />
    </div>
  );
}