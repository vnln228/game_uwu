import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './home.css'
import { addPlayer } from './redux/slises'
import { v4 } from 'uuid';
    
function getRandomArbitrary(min, max) {return Math.random() * (max - min) + min;}

const id = v4()

function Home(){

    
    const dispatch = useDispatch()

    let [nick, setNick] = useState('')


  

    function pushNick(){
      

        const player ={
          id: id,
          nick: nick,
          // x: getRandomArbitrary(20, window.innerWidth-20),
          // y: getRandomArbitrary(20, window.innerHeight-20),
          x: window.innerWidth/2,
          y: window.innerHeight/2,
          rad: 20,
          rot: 2,
          heal: 100,
          color: '#e37878',
          speed: 1
        }
        dispatch(addPlayer(player)); 
        
        
        nick = '' 
    }
    return (
      <div className='home'>
        <form className='form'>
            <input className='input nickName' placeholder='nick name' value={nick} onChange={e => setNick(e.target.value)}></input>

            <Link onClick={pushNick} state={{plid:useSelector((state)=>state.players.players)}} className='input btn' to='/game'>play</Link>
            
        </form>
      </div>
    )
}
export default Home