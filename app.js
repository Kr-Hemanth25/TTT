let count = 0;
let rcount = 0;
let i = 5;
const gam = [
    "Good move!",
    "Interesting choice.",
    "Let's see where this goes.",
    "Awesome move!",
    "Mind-blowing move!",
    "What a move!"
];

let randomCommentary = "";

const boxes = document.querySelectorAll('.box');
const commentary = document.querySelector(".com");
const player1Score = document.querySelector('.player1');
const player2Score = document.querySelector('.player2');
const restartButton = document.getElementById("ab");

let player1 = 0;
let player2 = 0;
let g = 0;
let g1 = 0;

const winningCombinations = [
    [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 4, 6]
];

function checkWin(player) {
    return winningCombinations.some(combination => 
        combination.every(index => boxes[index].value === player)
    );
}

function resetBoard() {
    boxes.forEach(box => {
        box.innerHTML = '';
        box.value = 2;
    });
    count = 0;
    g = 0;
    g1 = 0;
    rcount = 0;
    commentary.innerHTML = "";
}

function restartGame() {
    let timer = setInterval(() => {
        if (i <= -1) {
            clearInterval(timer);
            player1=0
            player2=0
            commentary.innerHTML = "";
            player1Score.innerHTML = 'player1:'+player1;
    player2Score.innerHTML = 'player2:'+player2;
            restartButton.style.visibility = "visible";
            resetBoard();
        } else {
            commentary.innerHTML = `REStarting match in ${i} seconds`;
            i--;
        }
    }, 1000);
}

function updateScores() {
    player1Score.innerHTML = 'player1:'+player1;
    player2Score.innerHTML = 'player2:'+player2;
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (player1 === 5 || player2 === 5 || box.querySelector('img')) return;

        if (count % 2 === 0 && count <= 11) {
            let img = document.createElement('img');
            img.setAttribute('class', 'img');
            img.src = "a.svg";
            box.append(img);
            box.value = 0;
            count++;
            
            if (g === 0) {
                commentary.innerHTML = "Attacking start from player1";
                g++;
            } else {
                randomCommentary = gam[Math.floor(Math.random() * gam.length)];
                commentary.innerHTML = randomCommentary;
            }

            if (count >= 5 && checkWin(0)) {
                player1++;
                updateScores();
                commentary.innerHTML = player1 === 5 ? "Player1 is victorious!" : "Player1 takes win!";
                g = 0; g1 = 0; rcount = 0;
                if (player1 === 5) {
                    i = 5;
                    restartGame();
                } else {
                    setTimeout(() => {
                        commentary.innerHTML = "Player2 to Start";
                        resetBoard();
                    }, 1000);
                }
            }

        } else if (count % 2 !== 0 && count <= 10) {
            let img = document.createElement('img');
            img.setAttribute('class', 'img');
            img.src = "b.svg";
            box.append(img);
            box.value = 1;
            count++;
            
            if (g1 === 0) {
                commentary.innerHTML = "Awesome start from player2";
                g1++;
            } else {
                randomCommentary = gam[Math.floor(Math.random() * gam.length)];
                commentary.innerHTML = randomCommentary;
            }

            if (count >= 5 && checkWin(1)) {
                player2++;
                updateScores();
                commentary.innerHTML = player2 === 5 ? "Player2 is victorious!" : "Player2 takes win!";
                g = 0; g1 = 0; rcount = 0;
                if (player2 === 5) {
                    i = 5;
                    restartGame();
                } else {
                    setTimeout(() => {
                        commentary.innerHTML = "Player1 to start";
                        resetBoard();
                    }, 1000);
                }
            }
        }

        if (count >= 9) {
            commentary.innerHTML = "Tie Game!!";
            setTimeout(resetBoard, 3000);
        }
    });
});
