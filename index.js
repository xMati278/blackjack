let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    sumEl.textContent = "Sum:  " + sum
    messageEl.textContent = message
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
}

function startGame() {
    renderGame()
}

function newCard() {
    let card = 3
    sum += card
    renderGame()
}