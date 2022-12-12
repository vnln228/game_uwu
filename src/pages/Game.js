import React from 'react'
import { useSelector } from 'react-redux';
import Render from './Render';


function Game(){
    var players = useSelector((state)=>state.players.players)
    var c = document.getElementById('cnv')
    var ctx = c.getContext('2d')
    const width = c.width = window.innerWidth;
    const height = c.height = window.innerHeight;
    
    

    function name() {
        Render(ctx, players)

        window.requestAnimationFrame(name)
    }
    window.requestAnimationFrame(name)
}
export default Game
