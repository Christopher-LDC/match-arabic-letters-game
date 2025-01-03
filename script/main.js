const letters = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د']; // Lettres arabes
const gameBoard = document.getElementById('game-board');

// Dupliquez et mélangez les lettres
let cards = [...letters, ...letters];
cards = cards.sort(() => 0.5 - Math.random());

// Créez les cartes
cards.forEach((letter) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.letter = letter;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
});

let flippedCards = [];
let matchedPairs = 0;

// Fonction pour retourner une carte
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.textContent = this.dataset.letter;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Vérifiez si les cartes correspondent
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.letter === card2.dataset.letter) {
        matchedPairs++;
        flippedCards = [];

        if (matchedPairs === letters.length) {
            setTimeout(() => alert('Félicitations, vous avez gagné !'), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}