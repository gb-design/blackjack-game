"use strict";

const messageEl = document.getElementById("el-message");
const cardsEl = document.getElementById("el-cards");
const sumEl = document.getElementById("el-sum");

let firstCard = 5;
let secondCard = 9;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ``;

function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

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
}

function newCard() {
  let card = 7;
  sum += card;
  cards.push(card);
  renderGame();
}

function startGame() {
  renderGame();
}
