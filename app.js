"use strict";

const messageEl = document.getElementById("el-message");
const cardsEl = document.getElementById("el-cards");
const sumEl = document.getElementById("el-sum");

let firstCard = 5;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ``;

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've go Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
}

function newCard() {
  let card = 7;
  sum += card;
  startGame();
}
