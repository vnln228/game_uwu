import { useSelector } from "react-redux";
import store from "./redux/store";
import Move from './Move';



function Render(canv, players, id) {
    canv.clearRect(0, 0, window.innerWidth, window.innerHeight)
    canv.globalAlpha = 0.9
    
    function draw(p){
        canv.save()
        canv.beginPath();
        canv.translate(p.x, p.y);
        canv.fillStyle='#f5dbdb'
        canv.rotate(p.rot);
        canv.fillRect(-10, 0, 20, 40);
        canv.closePath();
        canv.restore();

        canv.beginPath();
        
        
        canv.arc(p.x, p.y, p.rad, 0, Math.PI*2);
        canv.fillStyle = p.color;
        canv.fill();
        canv.fillStyle = 'black';
        canv.fillText(p.nick, p.x-p.rad/2, p.y-p.rad-10)
        canv.fillStyle = 'black';
        canv.fillText(p.heal, p.x-9, p.y+3,)

        canv.closePath();
        



        
    }
    players.map((player)=>{
        draw(player)
    })
        Move(players, id)
    
    
}
export default Render