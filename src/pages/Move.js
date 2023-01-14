import React, { useState } from 'react'
import { incrementPlayerX } from './redux/slises'
import store from './redux/store'
import { useDispatch } from 'react-redux'

var rightPressed   = false
var leftPressed    = false
var upPressed      = false
var downPressed    = false
// var shooting       = false
var mousePose      = {
    x:0,
    y:0
}
function Move(pls, id) {
    // console.log('pines');
    addEventListener('keydown', keyDownHandler, false)
    addEventListener('keyup', keyUpHandler, false)
    addEventListener('mousemove', (e)=>{
            mousePose.x = e.clientX
            mousePose.y = e.clientY
    })
    function keyDownHandler(e) {
        if(e.keyCode === '68'){
            console.log('hh');
            rightPressed = true
        }
        if(e.keyCode === '65'){
            leftPressed = true
        }
        if(e.keyCode === '87'){
            upPressed = true
        }
        if(e.keyCode === '83'){
            downPressed = true
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode === '68'){
            rightPressed = false
        }
        if(e.keyCode === '65'){
            leftPressed = false
        }
        if(e.keyCode === '87'){
            upPressed = false
        }
        if(e.keyCode === '83'){
            downPressed = false
        }
    }
    
    

    // addEventListener('click',()=>{
    //     shooting = true
    // }, false)
    
    
    
        // if(shooting){
        //     const s = new shoot(
        //         obj.x,
        //         obj.y
        //     )
        //     shoots.push(s)
        //     shooting = false
        // }
        if(rightPressed){
            console.log('r');}
        if(leftPressed){
            console.log('l');}
        if(upPressed){
            console.log('u');}
        if(downPressed){
            console.log('d');}
    
        // let r = Math.atan2(mousePose.x-obj.x,  mousePose.y-obj.y)
        // obj.rot = -r
        // rotate = r
    
        // if(obj.x > width-obj.rad)obj.x-=obj.speed
        // if(obj.x < 0+obj.rad)obj.x+=obj.speed
        // if(obj.y > height-obj.rad)obj.y-=obj.speed
        // if(obj.y < 0+obj.rad)obj.y+=obj.speed
    
    
    
}
export default Move

