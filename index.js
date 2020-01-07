const player1 = Math.floor(Math.random() * (6 - 1) + 1);
const player2 = Math.floor(Math.random() * (6 - 1) + 1);

if(player1 > player2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if(player2 > player1) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelectorAll("img")[0].setAttribute("src", `public/images/dice${player1}.png`);
document.querySelectorAll("img")[1].setAttribute("src", `public/images/dice${player2}.png`);
