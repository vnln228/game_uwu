import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import Render from './Render';
import Move from './Move';
import { useDispatch } from 'react-redux'
import { move } from './redux/slises'

var rightPressed   = false
var leftPressed    = false
var upPressed      = false
var downPressed    = false

document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)
function keyDownHandler(e){
    if(e.code === 'KeyD'){
        rightPressed = true
    }
    if(e.code === 'KeyA'){
        leftPressed = true
    }
    if(e.code === 'KeyW'){
        upPressed = true
    }
    if(e.code === 'KeyS'){
        downPressed = true
    }
}
function keyUpHandler(e) {
    if(e.code === 'KeyD'){
        rightPressed = false
    }
    if(e.code === 'KeyA'){
        leftPressed = false
    }
    if(e.code === 'KeyW'){
        upPressed = false
    }
    if(e.code === 'KeyS'){
        downPressed = false
    }
}

function Game(){
    const dispatch = useDispatch()

    const location = useLocation();
    const player_id= location.state.plid.length;
    
    var players = useSelector((state)=>state.players.players)
    var c = document.getElementById('cnv')
    var ctx = c.getContext('2d')
    const width = c.width = window.innerWidth;
    const height = c.height = window.innerHeight;

    function scene() {
        if(rightPressed)dispatch(move({id:player_id, move:'r'}))
        if(leftPressed)dispatch(move({id:player_id, move:'l'}))
        if(upPressed)dispatch(move({id:player_id, move:'u'}))
        if(downPressed)dispatch(move({id:player_id, move:'d'}))
        
        Render(ctx, players, player_id)

            window.requestAnimationFrame(scene)
        }
        window.requestAnimationFrame(scene)
}
export default Game
