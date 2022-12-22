import React, { useState } from 'react'

function Move(pls, id) {
    var rightPressed   = false
    var leftPressed    = false
    var upPressed      = false
    var downPressed    = false
    // var shooting       = false
    var mousePose      = {
        x:0,
        y:0
    }
    
    document.addEventListener('keydown', keyDownHandler, false)
    document.addEventListener('keyup', keyUpHandler, false)
    document.addEventListener('mousemove', (e)=>{
            mousePose.x = e.clientX,
            mousePose.y = e.clientY
    })
    // addEventListener('click',()=>{
    //     shooting = true
    // }, false)
    
    function keyDownHandler(e) {
    
    
        if(e.keyCode == '68'){
            console.log('key');
            rightPressed = true
        }
        if(e.keyCode == '65'){
            console.log('key');
            leftPressed = true
        }
        if(e.keyCode == '87'){
            console.log('key');
            upPressed = true
        }
        if(e.keyCode == '83'){
            console.log('key');
            downPressed = true
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode == '68'){
            rightPressed = false
        }
        if(e.keyCode == '65'){
            leftPressed = false
        }
        if(e.keyCode == '87'){
            upPressed = false
        }
        if(e.keyCode == '83'){
            downPressed = false
        }
    }
    
    
    // function move_detector(obj) {
    //     // if(shooting){
    //     //     const s = new shoot(
    //     //         obj.x,
    //     //         obj.y
    //     //     )
    //     //     shoots.push(s)
    //     //     shooting = false
    //     // }
    //     if(rightPressed){
    //         obj.x+=obj.speed;}
    //     if(leftPressed){
    //         obj.x-=obj.speed;}
    //     if(upPressed){
    //         obj.y-=obj.speed;}
    //     if(downPressed){
    //         obj.y+=obj.speed;}
    
    //     let r = Math.atan2(mousePose.x-obj.x,  mousePose.y-obj.y)
    //     obj.rot = -r
    //     rotate = r
    
    //     if(obj.x > width-obj.rad)obj.x-=obj.speed
    //     if(obj.x < 0+obj.rad)obj.x+=obj.speed
    //     if(obj.y > height-obj.rad)obj.y-=obj.speed
    //     if(obj.y < 0+obj.rad)obj.y+=obj.speed
    
    // }
}
export default Move

