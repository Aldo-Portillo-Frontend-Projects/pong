const player1 = document.createElement('div');
player1.classList.add("player1")
document.body.append(player1)

const player2 = document.createElement('div');
player2.classList.add("player2")
document.body.append(player2)

const ball = document.createElement('div');
ball.classList.add("ball")
document.body.append(ball)

let player1Position = 40 
let player2Position = 40 
let ballPostition = {
    x: 49,
    y: 49
}

let animationFrameId;

player1.style.transform = `translateY(${player1Position}vh)`
player2.style.transform = `translateY(${player2Position}vh)`

ball.style.transform = `translate( ${ballPostition.x}vw, ${ballPostition.y}vh)`

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
        requestAnimationFrame(startGame)
    }

    if(e.key == '4')
        cancelAnimationFrame(animationFrameId)
    
})

function startGame (timeStamp) {
    console.log(timeStamp)
    animationFrameId  = requestAnimationFrame(startGame)
}

//