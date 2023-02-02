
import React, { useState, useRef } from 'react';
import '../App.css';
import Lane from './Lane';
import PlayerZone from './PlayerZone'


function App() {
  //drag and drop base code
  // const dragItem = useRef();
  // let dragOverItem = useRef();

  // const dragStart = (e, position) => {
  //   dragItem.current = position;
  //   console.log(e.target.innerHTML);
  // };

  // const dragEnter = (e, position) => {
  //   dragOverItem.current = position;
  //   console.log(e.target.innerHTML);
  // };

  // const drop = (e) => {
  //   e.preventDefault();
  //   //change mode of container to card state

  //   dragItem.current = null;
  //   dragOverItem.current = null;
    
  // };


  return (
    <div className="App">
      <PlayerZone
      player="p2-opp"
      />
      <div className="battlefield">
        <Lane 
        position="left"
        />
        <Lane 
        position="mid"
        />
        <Lane 
        position="right"
        />
      </div>
      <PlayerZone 
      player="p1-self"/>
    </div>
  );
}

export default App;
