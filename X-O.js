console.log("Welcome X-O.js game ");
const Bmusic = new Audio("music.mp3");
const gomusicc = new Audio("gameover.mp3");
const tmusic = new Audio("ting.mp3");
let turn = "X";
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]
let Restart=document.querySelector('.btn');

// let wins=  document.querySelector("#info").innerHTML=
// // Function to change turn :

const changeturn = () => {
    return turn === "X" ? "0" : "X";
}

const checkwin = () => {
    let textboxes = document.getElementsByClassName("box");
    let playerWon = false;

    win.forEach(D => {
        if ((textboxes[D[0]].innerText === textboxes[D[1]].innerText) && (textboxes[D[1]].innerText === textboxes[D[2]].innerText) && (textboxes[D[0]].innerText !== "")) {
            playerWon = true;
        }
    })
    return playerWon;
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerText === '') {
            if (turn == "X") {
                element.innerText = "0"
            }
            else {
                element.innerText = "X"
            }
            turn = changeturn();
            
            tmusic.play();
            checkwin();

            if (checkwin()) {
                document.getElementById("info").innerHTML = `${turn} Win`;
                turn.freeze="x";

            }
            else {
                document.getElementById("info").innerText = `Turn Of " ${changeturn()} " `;
            }
        }
    })
})
Restart.addEventListener('click',()=>{
    let buttons=document.querySelectorAll('.box');
    Array.from(buttons).forEach(element=>{
        element.innerText="";
        })
        document.getElementById("info").innerText = `Turn Of " ${changeturn()} " `;
        


})