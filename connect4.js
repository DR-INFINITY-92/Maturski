val_c1 = 1
val_c2 = 1
val_c3 = 1
val_c4 = 1
val_c5 = 1
val_c6 = 1
val_c7 = 1
turn = 1
let redScore = 0;
let yellowScore = 0;

// Function to update the scoreboard
function updateScoreboard() {
    document.getElementById('redScore').innerText = redScore;
    document.getElementById('yellowScore').innerText = yellowScore;
}

//checking the winner

function check(player) {
    setTimeout(() => {
        for (let i = 1; i <= 7; i++) {
            for (let j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                        document.getElementById('winSound').play();
                        alert(`${player} wins`);
                    if (player === 'red') {
                        redScore++;
                        
                    } else {
                        yellowScore++;
                    }
                    updateScoreboard();
                    resetBoard();
                    return;
                }
            }
        }

        for (let i = 1; i <= 6; i++) {
            for (let j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    if (player === 'red') {
                        redScore++;
                    } else {
                        yellowScore++;
                    }
                    updateScoreboard();
                    resetBoard();
                    return;
                }
            }
        }

        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    if (player === 'red') {
                        redScore++;
                    } else {
                        yellowScore++;
                    }
                    updateScoreboard();
                    resetBoard();
                    return;
                }
            }
        }

        for (let i = 1; i <= 4; i++) {
            for (let j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    if (player === 'red') {
                        redScore++;
                    } else {
                        yellowScore++;
                    }
                    updateScoreboard();
                    resetBoard();
                    return;
                }
            }
        }
    }, 200);
}

// Function to reset the board
function resetBoard() {
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 6; j++) {
            document.getElementById(`c${i}r${j}`).style.backgroundColor = 'white';
        }
    }
    val_c1 = val_c2 = val_c3 = val_c4 = val_c5 = val_c6 = val_c7 = 1;
    turn = 1;
    const player1Name = document.getElementById("player1name").value;
    document.getElementById("whosturn").innerText = player1Name + "' Potez";
}



//playing
document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {

        sum = eval(`val_${e.id}`)
        eval(`val_${e.id}++`)


        if (sum <= 6 && turn % 2 != 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red"
            turn++
            check('red')
            const player2Name = document.getElementById("player2name").value;
document.getElementById("whosturn").innerText = player2Name + " Potez";
        }
        
        else if (sum <= 6 && turn % 2 == 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "yellow"
            turn++
            check('yellow')
            const player1Name = document.getElementById("player1name").value;
            document.getElementById("whosturn").innerText = player1Name + " Potez";

        }
       




    })
})
document.getElementById('colorButton').addEventListener('click', function() {
    document.getElementById('colorModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('colorModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('colorModal')) {
        document.getElementById('colorModal').style.display = 'none';
    }
});

document.querySelectorAll('.color').forEach(function(colorDiv) {
    colorDiv.addEventListener('click', function() {
        const selectedColor = colorDiv.getAttribute('data-color');
        document.body.style.backgroundColor = selectedColor;
        document.getElementById('colorModal').style.display = 'none';
    });
});

const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

backgroundMusic.play();

musicButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.textContent = 'Isključi Muziku';
    } else {
        backgroundMusic.pause();
        musicButton.textContent = 'Uključi Muziku';
    }
});

document.getElementById('resetButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the click event
    resetBoard();
    document.getElementById('resetSound').play(); // Play the sound
});

// Function to handle color selection for game board fields
document.querySelectorAll('.color').forEach(colorDiv => {
    colorDiv.addEventListener('click', function() {
        const selectedColor = colorDiv.getAttribute('data-color');
        // Set the selected color for the game board fields
        document.querySelectorAll('.board ul p').forEach(field => {
            field.addEventListener('click', function() {
                if (currentPlayerForColorSelection === 1) {
                    field.style.backgroundColor = selectedColor;
                    // You might want to add additional logic here for game functionality
                } else if (currentPlayerForColorSelection === 2) {
                    field.style.backgroundColor = selectedColor;
                    // Additional logic for player 2's turn
                }
            });
        });
        // Close the color selection modal
        document.getElementById('colorModal').style.display = 'none';
    });
});

// Add event listeners to color selection buttons
document.getElementById('colorButton1').addEventListener('click', () => {
    openColorModal(1);
});

document.getElementById('colorButton2').addEventListener('click', () => {
    openColorModal(2);
});

// Function to open the color selection modal
function openColorModal(player) {
    // Set the current player for color selection
    currentPlayerForColorSelection = player;
    document.getElementById('colorModal').style.display = 'block';
}


