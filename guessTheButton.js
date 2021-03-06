let buttons = [];
let luckyButton = '';
let chosenButton = 0;
let numberOfButtons = 0;
let message = 'Try to guess the lucky button and press it!'

function generateButtons() {
    //resets the board if there was a previous game
    resetBoard();
    //sets the number of buttons equal to the number entered in the input and generates the buttons, populates the array with these buttons
    numberOfButtons = document.getElementById('inputNumber').value;
    for (let i = 1; i <= numberOfButtons; ++i) {
        let button = document.createElement('button');
        button.className = 'btn';
        button.id = i;
        button.innerHTML = i;
        buttons[i] = button;
        let keyboard = document.getElementById('keyboard');
        keyboard.appendChild(button);
        //we set the second click of the submit / reset button to check if the chosen button is the lucky one
        button.onclick = function() {
            if (luckyButton === button) {
                message = 'You are wrigt, that is the lucky button, you won! Reset to play again.'
                button.classList.add("winner-button");
            } else {
                message = 'Sorry, that is not the lucky button! Reset to play again.'
                button.classList.add("loser-button");
            }
            document.getElementById('message').innerHTML = message;
            // disable buttons (except the one that was pressed)
            const keyboard = document.getElementById('keyboard');
            keyboard.childNodes.forEach(node => {
                // daca nu suntem la butonul apasat => disable
                if (node !== button) {
                    node.disabled = true;
                }
            })
        }
    }
    chooseLuckyButton();
}

function chooseLuckyButton() {
    let inputNumber = parseInt(document.getElementById('inputNumber').value);
    luckyButton = buttons[Math.floor(Math.random() * inputNumber + 1)];
    console.log(luckyButton);
}

function resetBoard() {
    //  clear all buttons if there was a previous match
    const keyboard = document.getElementById('keyboard');
    console.log('childNodes', keyboard.childNodes)

    // remove all buttons from the container
    while (keyboard.firstChild) {
        keyboard.removeChild(keyboard.lastChild);
    }

    // reseteaza array-ul
    while (buttons.length) {
        buttons.pop();
    }

    //resets the variables to the default values
    luckyButton = '';
    chosenButton = 0;
    numberOfButtons = 0;
    message = 'Try to guess the lucky button and press it!'
    document.getElementById('message').innerHTML = message;
}
