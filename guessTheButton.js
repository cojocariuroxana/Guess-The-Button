let buttons = [];
let luckyButton = '';
let chosenButton = 0;
let numberOfButtons = 0;
let message = 'Try to guess the lucky button and press it!'

function generateButtons() {
    resetBoard();
    numberOfButtons = document.getElementById('inputNumber').value;
    console.log('numberOfButtons', numberOfButtons)
    for (let i = 1; i <= numberOfButtons; ++i) {
        let button = document.createElement('button');
        button.className = 'btn';
        button.id = i;
        button.innerHTML = i;
        buttons[i] = button;
        let keyboard = document.getElementById('keyboard');
        keyboard.appendChild(button);
        button.onclick = function() {
            if (luckyButton === button) {
                message = 'You are wrigt, that is the lucky button, you won! Reset to play again.'
                button.classList.add("winner-button");
            } else {
                message = 'Sorry, that is not the lucky button! Reset to play again.'
                button.classList.add("loser-button");
            }
            document.getElementById('message').innerHTML = message;
            // da disable butoanelor(cu exceptia celui apasat)
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

function checkIfWon(chosenButton) {
    if (luckyButton === chosenButton) {
        message = 'You are wrigt, that is the lucky button, you won! Reset to play again.'
    } else {
        message = 'Sorry, that is not the lucky button! Reset to play again.'
    }
    document.getElementById('message').innerHTML = message;
}

function resetBoard() {
    // sterge toate butoanele daca a existat un meci precedent
    const keyboard = document.getElementById('keyboard');
    console.log('childNodes', keyboard.childNodes)

    // scoate toate butonele din container
    while (keyboard.firstChild) {
        keyboard.removeChild(keyboard.lastChild);
    }

    // reseteaza array-ul
    while (buttons.length) {
        buttons.pop();
    }

    // reseteaza variabilele la valorile default
    luckyButton = '';
    chosenButton = 0;
    numberOfButtons = 0;
    message = 'Try to guess the lucky button and press it!'
    document.getElementById('message').innerHTML = message;
}