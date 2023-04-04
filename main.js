const player1 = document.createElement('div');
player1.classList.add("player1")
document.body.append(player1)

let player1Position = 40 

player1.style.marginTop = `${player1Position}vh`

document.body.addEventListener("keydown", e => {
    console.log(e)
    player1Position += 5
    player1.style.marginTop = `${player1Position}vh`
})