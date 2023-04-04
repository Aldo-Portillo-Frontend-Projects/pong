const player1 = document.createElement('div');
player1.classList.add("player1")
document.body.append(player1)

const player2 = document.createElement('div');
player2.classList.add("player2")
document.body.append(player2)

const ball = document.createElement('div');
ball.classList.add("ball")
document.body.append(ball)

const player1PointsHtml = document.createElement('h2')
player1PointsHtml.classList.add("player-1-points")
document.body.append(player1PointsHtml)

const player2PointsHtml = document.createElement('h2')
player2PointsHtml.classList.add("player-2-points")
document.body.append(player2PointsHtml )


let player1Position = 40 
let player2Position = 40 
let ballProps = {
    x: 49,
    y: 49,
    speedX: 0.75,
    speedY: 0,
}

const player1Info = {
    postionY: 40,
    points: 0,
    speed: 5,
}
player1PointsHtml.textContent = player1Info.points 

const player2Info = {
    postionY: 40,
    points: 0,
    speed: 5,
}
player2PointsHtml.textContent = player2Info.points 

let animationFrameId;

player1.style.transform = `translateY(${player1Position}vh)`
player2.style.transform = `translateY(${player2Position}vh)`

ball.style.transform = `translate( ${ballProps.x}vw, ${ballProps.y}vh)`

document.body.addEventListener("keydown", e => {
    console.log(e.key)
    if(e.key == 's' && player1Position < 80){ //not strict equal to deal with accidental caps lock
        player1Position += 5
        player1.style.transform = `translateY(${player1Position}vh)`
    }
    if(e.key == 'w' && player1Position > 0){
        player1Position -= 5
        player1.style.transform = `translateY(${player1Position}vh)`
    }
    if(e.key == 'ArrowDown' && player2Position < 80){
        player2Position += 5
        player2.style.transform = `translateY(${player2Position}vh)`
    }
    if(e.key == 'ArrowUp' && player2Position > 0){
        player2Position -= 5
        player2.style.transform = `translateY(${player2Position}vh)`
    }

    if(e.key == ' '){
        cancelAnimationFrame(animationFrameId)

        ballProps.speedX = 0.75
        
        requestAnimationFrame(startGame)
        
    }

    if(e.key == '4')
        cancelAnimationFrame(animationFrameId)
    
})

function startGame (timeStamp) {
    
    ballProps.x += ballProps.speedX;
    ballProps.y += ballProps.speedY;
    ball.style.transform = `translate( ${ballProps.x}vw, ${ballProps.y}vh)`

    if(ballProps.y >= 100 || ballProps.y <= 0){
        console.log("oops")
        ballProps.speedY *=-1
    }

    if(ballProps.x < 2 && ballProps.y >= player1Position && ballProps.y <= player1Position + 20){
        ballProps.speedX *= -1;
        if(ballProps.y - 9 < player1Position){
            ballProps.speedY = -1 
        }
        if(ballProps.y - 9 > player1Position ){
            ballProps.speedY = 1 
        }
    }

    if(ballProps.x > 98 && ballProps.y >= player2Position && ballProps.y <= player2Position + 20){
            ballProps.speedX *= -1
            if(ballProps.y - 9 < player2Position){
                ballProps.speedY = -1 
            }
            if(ballProps.y - 9 > player2Position ){
                ballProps.speedY = 1 
            }
    }

    if(ballProps.x < 0){
        ballProps.x = 49
        ballProps.y = 49
        ballProps.speedX = 0
        ballProps.speedY = 0
        player2Info.points += 1;
        player2PointsHtml.textContent = player2Info.points 
    }

    if(ballProps.x > 100){
        ballProps.x = 49
        ballProps.y = 49
        ballProps.speedX = 0
        ballProps.speedY = 0
        player1Info.points += 1;
        player1PointsHtml.textContent = player1Info.points 
    }

    animationFrameId  = requestAnimationFrame(startGame)
}

//