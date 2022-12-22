import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import Render from './Render';

function Game(){
    const location = useLocation();
    const player_id= location.state.plid;
    
    var players = useSelector((state)=>state.players.players)
    var c = document.getElementById('cnv')
    var ctx = c.getContext('2d')
    const width = c.width = window.innerWidth;
    const height = c.height = window.innerHeight;
    console.log(player_id);

    var rightPressed   = false
    var leftPressed    = false
    var upPressed      = false
    var downPressed    = false
    // var shooting       = false
    var mousePose      = {
        x:0,
        y:0
    }
    
    

    function name() {
        Render(ctx, players)

        window.requestAnimationFrame(name)
    }
    window.requestAnimationFrame(name)
}
export default Game
