import { useSelector } from "react-redux";



function Render(canv, players) {
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
        canv.fillText(p.heal, p.x-p.rad/2, p.y-p.rad-10)
        canv.arc(p.x, p.y, p.rad, 0, Math.PI*2);
        canv.fillStyle = p.color;
        canv.fill();
        canv.closePath();
    }
    players.map((player)=>{
        draw(player)
    })
}
export default Render