import "../Pong.css"

let gamePlay = false;
let player;



function startGame(){
    gamePlay = true;
    console.log("Game has started")
    alert("Game has started")
    player={
        score: 0,
        lives: 1
    }
}

export default function Playerbar(){

    const btnStart = document.querySelector('.playerBar');
    btnStart && btnStart.addEventListener("click",startGame, false);

    const canvas = document.querySelector('Pong')

    // initiating 2D context on it
    const c = canvas.getContext('2d')

    return(
        <div>

        </div>
        
    );
}