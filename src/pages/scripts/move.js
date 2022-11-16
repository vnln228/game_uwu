
    var rightPressed   = false
    var leftPressed    = false
    var upPressed      = false
    var downPressed    = false
    var shooting       = false
    var mousePose      = {
        x:0,
        y:0
    }
    
    addEventListener('keydown', keyDownHandler, false)
    addEventListener('keyup', keyUpHandler, false)
    addEventListener('mousemove', (e)=>{
            mousePose.x = e.clientX-((window.innerWidth-c.clientWidth)/2),
            mousePose.y = e.clientY-10
    })
    addEventListener('click',()=>{
        shooting = true
    }, false)
    
    function keyDownHandler(e) {
    
    
        if(e.keyCode == '68'){
            rightPressed = true
        }
        if(e.keyCode == '65'){
            leftPressed = true
        }
        if(e.keyCode == '87'){
            upPressed = true
        }
        if(e.keyCode == '83'){
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
    
    
    function move_detector(obj) {
        if(shooting){
            const s = new shoot(
                obj.x,
                obj.y
            )
            shoots.push(s)
            shooting = false
        }
        if(rightPressed){
            obj.x+=obj.speed;}
        if(leftPressed){
            obj.x-=obj.speed;}
        if(upPressed){
            obj.y-=obj.speed;}
        if(downPressed){
            obj.y+=obj.speed;}
    
        let r = Math.atan2(mousePose.x-obj.x,  mousePose.y-obj.y)
        obj.rot = -r
        rotate = r
    
        if(obj.x > width-obj.rad)obj.x-=obj.speed
        if(obj.x < 0+obj.rad)obj.x+=obj.speed
        if(obj.y > height-obj.rad)obj.y-=obj.speed
        if(obj.y < 0+obj.rad)obj.y+=obj.speed
    
        // console.log(shoots);
    }
    
    console.log('move is loaded');
