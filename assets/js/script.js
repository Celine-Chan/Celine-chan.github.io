// affiche sur le 1er écran (l'addition/multiplication...)
const firstBlock = document.getElementById("firstBlock");
const secondBlock = document.getElementById("secondBlock");
const thirdBlock = document.getElementById("thirdBlock");
const fourthBlock = document.getElementById("fourthBlock");

let block = firstBlock;

// const firstNumber = document.getElementById("firstNumber");

// affiche le 2eme écran (le résultat)
const result = document.getElementById("result");

// pour les paramètres de la fonction comme "number"
let calculString = "";

// affiche les nombres sur le 1er écran
function addNumber(number) {
    block.innerHTML += number;
}

// affiche les symboles mathématiques
function addSymbol(operator) {
    secondBlock.innerHTML = operator;
    block = thirdBlock;
}

function showResult() {
    fourthBlock.innerHTML = "=";
    console.log(secondBlock.textContent);
    if (secondBlock.textContent == "+") {
        result.innerHTML = parseInt(firstBlock.textContent) + parseInt(thirdBlock.textContent);
    } 
    if (secondBlock.textContent == "x") {
        result.innerHTML = parseInt(firstBlock.textContent) * parseInt(thirdBlock.textContent);
    }
    if (secondBlock.textContent == "/") {
        result.innerHTML = parseInt(firstBlock.textContent) / parseInt(thirdBlock.textContent);
    }
    if (secondBlock.textContent == "-") {
        result.innerHTML = parseInt(firstBlock.textContent) - parseInt(thirdBlock.textContent);
    }
};

function reset() {
    firstBlock.innerHTML = "";
    secondBlock.innerHTML = "";
    thirdBlock.innerHTML = "";
    fourthBlock.innerHTML = "";
    result.innerHTML = "";
    block = firstBlock;
};













// function nineNumber() {
//     showNumberOne.innerHTML += "9";
// };

// function eightNumber() {
//     showNumberOne.innerHTML += "8";
// };

// function sevenNumber() {
//     showNumberOne.innerHTML += "7";
// };

// function sixNumber() {
//     showNumberOne.innerHTML += "6";
// };

// function fiveNumber() {
//     showNumberOne.innerHTML += "5";
// };

// function fourNumber() {
//     showNumberOne.innerHTML += "4";
// };

// function threeNumber() {
//     showNumberOne.innerHTML += "3";
// };

// function twoNumber() {
//     showNumberOne.innerHTML += "2";
// };

// function oneNumber() {
//     showNumberOne.innerHTML += "1";
// };

// function zeroNumber() {
//     showNumberOne.innerHTML += "0";
// };

// function addNumber() {
//     showNumberOne.innerHTML += "+";
//     calculString = "+";
// };

// function multiplicateNumber() {
//     showNumberOne.innerHTML += "x";
// };

// function minusNumber() {
//     showNumberOne.innerHTML += "-";
// };

// function splitNumber() {
//     showNumberOne.innerHTML += "/";
// };

// function dotNumber() {
//     showNumberOne.innerHTML += ".";
// };







