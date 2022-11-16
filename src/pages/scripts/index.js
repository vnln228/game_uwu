var player = new sprite(
    60,
    50,
    0,
    20,
    'player'
)
function spawn_jew() {
    
    var villian = new jew(
        Math.random() * (width-20 - 20) + 20,
        Math.random() * (height-20 - 20) + 20,
        0,
        20,
        'villian'
    )
    jews.push(villian)
}
state.push(player)


function game(){
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.globalAlpha = 0.9

    try {
        if(jews.length==0){
            spawn_jew()
        }
        shoots.map((s)=>{
            s.draw()
            s.update()
            if(s.x>2000 || s.x<-2000 || s.y>2000 || s.y<0){
                shoots.shift()
            }

        }) 
        state.map((obj)=>{
            obj.draw()
            move_detector(obj)
        })  
        jews.map((obj)=>{
            obj.draw()
            shoots.forEach(s => {
                if(Math.sqrt(((s.x - obj.x) ** 2) + ((s.y - obj.y) ** 2))-(s.rad+obj.rad)<=0){
                    obj.heal-=10
                    shoots.pop(s)                }
            });
            if(obj.heal==0){
                jews.pop(obj)
            }
        }) 
    } catch (error) {
    }

    window.requestAnimationFrame(game)
}
window.requestAnimationFrame(game)
console.log('script is loaded');
