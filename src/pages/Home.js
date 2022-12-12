import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './home.css'
import { addPlayer } from './redux/slises'
import { v4 } from 'uuid';
    
function getRandomArbitrary(min, max) {return Math.random() * (max - min) + min;}
function Home(){
  
    const dispatch = useDispatch()

    let [nick, setNick] = useState('')

    const plid = v4()

    function pushNick(){
      

        const player ={
          id: plid,
          nick: nick,
          x: getRandomArbitrary(20, window.innerWidth-20),
          y: getRandomArbitrary(20, window.innerHeight-20),
          rad: 20,
          rot: 2,
          heal: 100,
          color: '#28537d',
          speed: 10
        }
        dispatch(addPlayer(player)); 
        nick = '' 
    }
    return (
      <div className='home'>
        <div className='form'>
            <input className='input nickName' placeholder='nick name' value={nick} onChange={e => setNick(e.target.value)}></input>

            <Link onClick={pushNick} className='btn paly' to="/game" params={{ player_id: plid }}>play</Link>
        </div>
      </div>
    )
}
export default Home