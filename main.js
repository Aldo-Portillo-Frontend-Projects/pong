const player1 = document.createElement('div');
player1.classList.add("player1")
document.body.append(player1)

const player2 = document.createElement('div');
player2.classList.add("player2")
document.body.append(player2)

let player1Position = 40 
let player2Position = 40 

player1.style.marginTop = `${player1Position}vh`
player2.style.marginTop = `${player2Position}vh`

document.body.addEventListener("keydown", e => {
    console.log(e.key)
    if(e.key == 's' && player1Position < 80){ //not strict equal to deal with accidental caps lock
        player1Position += 5
        player1.style.marginTop = `${player1Position}vh`
    }
    if(e.key == 'w' && player1Position > 0){
        player1Position -= 5
        player1.style.marginTop = `${player1Position}vh`
    }
    if(e.key == 'ArrowDown' && player2Position < 80){
        player2Position += 5
        player2.style.marginTop = `${player2Position}vh`
    }
    if(e.key == 'ArrowUp' && player2Position > 0){
        player2Position -= 5
        player2.style.marginTop = `${player2Position}vh`
    }
    
})