let previousCardBtn = document.getElementById('previousCard');
let nextCardBtn = document.getElementById('nextCard');

let carousel = document.getElementById('carousel');

let currentCard = 1;

let cardCount = 3;

previousCardBtn.addEventListener('click', previousCard);

nextCardBtn.addEventListener('click', nextCard);

function previousCard() {
    clearInterval(cardTimer);
    cardTimer = setInterval(setCardTimer, 10000);
    
    if (currentCard == 0) {
        return;
    } else {
        for (let i = 0; i < carousel.children.length; i++) {
            carousel.children[i].classList.remove('card-visible');

            carousel.children[i].classList.remove('card-visible-1');
            carousel.children[i].classList.remove('card-visible-2');
            carousel.children[i].classList.remove('card-visible-3');
        }

        currentCard--;

        if (currentCard == carousel.children.length) {
            carousel.children[currentCard - 2].classList.add('card-visible');
            carousel.children[currentCard - 1].classList.add('card-visible');
            carousel.children[currentCard].classList.add('card-visible');

            carousel.children[currentCard - 1].classList.add('card-visible-1');
            carousel.children[currentCard].classList.add('card-visible-2');
            carousel.children[currentCard + 1].classList.add('card-visible-3');
        } else if (currentCard == 0) {
            carousel.children[currentCard].classList.add('card-visible');
            carousel.children[currentCard + 1].classList.add('card-visible');

            carousel.children[currentCard].classList.add('card-visible-2');
            carousel.children[currentCard + 1].classList.add('card-visible-3');

        } else {
            carousel.children[currentCard - 1].classList.add('card-visible');
            carousel.children[currentCard].classList.add('card-visible');
            carousel.children[currentCard + 1].classList.add('card-visible');

            carousel.children[currentCard - 1].classList.add('card-visible-1');
            carousel.children[currentCard].classList.add('card-visible-2');
            carousel.children[currentCard + 1].classList.add('card-visible-3');
        }
    }
}

function nextCard() {
    clearInterval(cardTimer);
    cardTimer = setInterval(setCardTimer, 10000);

    if (currentCard == carousel.children.length) {
        return;
    } else {
        for (let i = 0; i < carousel.children.length; i++) {
            carousel.children[i].classList.remove('card-visible');

            carousel.children[i].classList.remove('card-visible-1');
            carousel.children[i].classList.remove('card-visible-2');
            carousel.children[i].classList.remove('card-visible-3');
        }

        currentCard++;

        if (currentCard == carousel.children.length - 1) {
            carousel.children[currentCard - 1].classList.add('card-visible');
            carousel.children[currentCard].classList.add('card-visible');

            carousel.children[currentCard].classList.add('card-visible-2');
            carousel.children[currentCard - 1].classList.add('card-visible-1');

        } else {

            if (currentCard >= cardCount) {
                currentCard--;

                carousel.children[currentCard - 1].classList.add('card-visible');
                carousel.children[currentCard].classList.add('card-visible');

                carousel.children[currentCard].classList.add('card-visible-2');
                carousel.children[currentCard - 1].classList.add('card-visible-1');

                return;
            }

            carousel.children[currentCard - 1].classList.add('card-visible');
            carousel.children[currentCard].classList.add('card-visible');
            carousel.children[currentCard + 1].classList.add('card-visible');

            carousel.children[currentCard - 1].classList.add('card-visible-1');
            carousel.children[currentCard].classList.add('card-visible-2');
            carousel.children[currentCard + 1].classList.add('card-visible-3');
        }
    }
}

// automatically goes through carousel

let cardTimer = setInterval(setCardTimer, 10000);

function setCardTimer() {
    if (currentCard + 1 == cardCount) {
        currentCard = 1;
        previousCard();
    } else {
        nextCard();
    }
}