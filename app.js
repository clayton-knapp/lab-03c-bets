const highButton = document.getElementById('high-button');
const lowButton = document.getElementById('low-button');
const displayBank = document.getElementById('display-bank');
const betInput = document.getElementById('bet-input');
const result = document.getElementById('result');

let bank = 1000;
displayBank.textContent = bank;

highButton.addEventListener('click', () => {
    let random = Math.random();
    //console.log(random);
    if(random < .5){
        // high loses
        result.textContent = "lose!"
        bank = bank - Number(betInput.value);
        displayBank.textContent = bank;
    }
    else {
        // high wins
        result.textContent = "win!"
        bank = bank + Number(betInput.value);
        displayBank.textContent = bank;
    };
});

lowButton.addEventListener('click', () => {
    let random = Math.random();
    //console.log(random);
    if(random < .5){
        // low wins
        result.textContent = "win!"
        bank = bank + Number(betInput.value);
        displayBank.textContent = bank;
    }
    else {
        //low loses
        result.textContent = "lose!"
        bank = bank - Number(betInput.value);
        displayBank.textContent = bank;
    }
});