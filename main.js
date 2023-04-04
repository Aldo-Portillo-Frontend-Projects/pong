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

const footer = document.getElementById("footer")


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

player1.style.transform = `translateY(${player1Info.postionY}vh)`
player2.style.transform = `translateY(${player2Info.postionY}vh)`

ball.style.transform = `translate( ${ballProps.x}vw, ${ballProps.y}vh)`

document.body.addEventListener("keydown", e => {
    if(e.key == 's' && player1Info.postionY < 80){ //not strict equal to deal with accidental caps lock
        player1Info.postionY += player1Info.speed
        player1.style.transform = `translateY(${player1Info.postionY}vh)`
    }
    if(e.key == 'w' && player1Info.postionY > 0){
        player1Info.postionY -= player1Info.speed
        player1.style.transform = `translateY(${player1Info.postionY}vh)`
    }
    if(e.key == 'ArrowDown' && player2Info.postionY < 80){
        player2Info.postionY += player2Info.speed
        player2.style.transform = `translateY(${player2Info.postionY}vh)`
    }
    if(e.key == 'ArrowUp' && player2Info.postionY > 0){
        player2Info.postionY -= player2Info.speed
        player2.style.transform = `translateY(${player2Info.postionY}vh)`
    }

    if(e.key == ' '){
        cancelAnimationFrame(animationFrameId)

        footer.textContent = "Follow me on Github"
        ballProps.speedX = 0.75
        
        requestAnimationFrame(startGame)
        
    }
})

function startGame (timeStamp) {
    
    ballProps.x += ballProps.speedX;
    ballProps.y += ballProps.speedY;
    ball.style.transform = `translate( ${ballProps.x}vw, ${ballProps.y}vh)`

    if(ballProps.y >= 100 || ballProps.y <= 0){
        console.log("oops")
        ballProps.speedY *=-1
    }

    if(ballProps.x < 2 && ballProps.y >= player1Info.postionY && ballProps.y <= player1Info.postionY + 20){
        ballProps.speedX *= -1;
        if(ballProps.y - 9 < player1Info.postionY){
            ballProps.speedY = -0.75
        }
        if(ballProps.y - 9 > player1Info.postionY ){
            ballProps.speedY = 0.75
        }
    }

    if(ballProps.x > 98 && ballProps.y >= player2Info.postionY && ballProps.y <= player2Info.postionY + 20){
            ballProps.speedX *= -1
            if(ballProps.y - 9 < player2Info.postionY){
                ballProps.speedY = -0.75
            }
            if(ballProps.y - 9 > player2Info.postionY ){
                ballProps.speedY = 0.75 
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