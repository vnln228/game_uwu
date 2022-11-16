import React from 'react'
import {useSelector } from 'react-redux';



function Game(){

  console.log(useSelector((state)=>state.players.players));
    return (
      <div>
        <canvas id="cnv"></canvas>
      </div>
      
    )
    
}
export default Game
