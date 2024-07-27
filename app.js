let count = 0;
let player1 = 0;
let player2 = 0;
let g = 0;
let g1 = 0;
const gam = ["Good move!", "Interesting choice.", "Let's see where this goes.", "Awesome move!", "Mindblowing move!", "What a move!"];
const boxes = document.querySelectorAll('.box');

boxes.forEach(e => {
    e.value = 2; // Initialize box value to a neutral state
    e.addEventListener('click', () => {
        if (e.querySelector("img")) {
            document.querySelector(".com").innerHTML = "Box has already been selected";
            return;
        }

        const img = document.createElement('img');
        if (count % 2 === 0) {
            img.src = "a.svg";
            e.value = 0;
            document.querySelector(".com").innerHTML = g === 0 ? "Attacking start from player1" : gam[Math.floor(Math.random() * gam.length)];
            g++;
        } else {
            img.src = "b.svg";
            e.value = 1;
            document.querySelector(".com").innerHTML = g1 === 0 ? "Awesome start from player2" : gam[Math.floor(Math.random() * gam.length)];
            g1++;
        }
        e.append(img);
        count++;

        checkWin();
    });
});

function checkWin() {
    const winningCombinations = [
        ["#a", "#e", "#i"], ["#a", "#d", "#g"], ["#b", "#e", "#h"], ["#c", "#f", "#i"],
        ["#a", "#b", "#c"], ["#d", "#e", "#f"], ["#g", "#h", "#i"], ["#c", "#e", "#g"]
    ];

    let winner = null;
    winningCombinations.forEach(combination => {
        const [first, second, third] = combination.map(id => document.querySelector(id).value);
        if (first !== 2 && first === second && second === third) {
            winner = first === 0 ? "player1" : "player2";
        }
    });

    if (winner) {
        document.querySelector(".com").innerHTML = `${winner} takes the win!`;
        if (winner === "player1") {
            player1++;
            document.querySelector('.player1').innerHTML = `Player1: ${player1}`;
        } else {
            player2++;
            document.querySelector('.player2').innerHTML = `Player2: ${player2}`;
        }
        resetGame();
    } else if (count === 9) {
        document.querySelector(".com").innerHTML = "Tie Game!";
        resetGame();
    }
}

function resetGame() {
    setTimeout(() => {
        boxes.forEach(box => {
            box.innerHTML = "";
            box.value = 2;
        });
        count = 0;
        g = 0;
        g1 = 0;
        document.querySelector(".com").innerHTML = player1 === 5 ? "Player1 is victorious!" : player2 === 5 ? "Player2 is victorious!" : player1 > player2 ? "Player2 to start" : "Player1 to start";
    }, 3000);
}
