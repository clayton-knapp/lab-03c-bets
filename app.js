const highButton = document.getElementById('high-button');
const lowButton = document.getElementById('low-button');
const displayBank = document.getElementById('display-bank');
const betInput = document.getElementById('bet-input');
const result = document.getElementById('result');

let bank = 1000;
displayBank.textContent = bank;

function showWin () {
    result.textContent = "win!"
}

function showLose () {
    result.textContent = "lose!"
}

function updateBank (bet) {
    bank = bank + bet;
    displayBank.textContent = bank;
}

highButton.addEventListener('click', () => {
    let random = Math.random();
    let bet = Number(betInput.value);
    if(random < .5){
        // high loses
        showLose ();
        updateBank (-1*bet);
    }
    else {
        // high wins
        showWin ();
        updateBank (bet);
    };
});

lowButton.addEventListener('click', () => {
    let random = Math.random();
    let bet = Number(betInput.value);
    //console.log(random);
    if(random < .5){
        // low wins
        showWin ();
        updateBank (bet);
    }
    else {
        //low loses
        showLose ();
        updateBank (-1*bet);
    }
    displayBank.textContent = bank;
});