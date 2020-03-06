export const populateCards = () => {
    let cards = [],
        suits = ["clubs", "diamonds", "spades", "hearts"],
        specialCards = ["ace", "jack", "kings", "queen"],
        index = 2;
    for (index = 2; index <= 10; index++) {
        suits.forEach(suit => {
            cards.push({
                value: `${index}_of_${suit}`,
                imageFile: `/images/${index}_of_${suit}.png`
            });
        });
    }

    specialCards.forEach(card => {
        suits.forEach(suit => {
            cards.push({
                value: `${card}_of_${suit}`,
                imageFile: `/images/${card}_of_${suit}.png`
            });
        })
    })
    return cards;
};

export const shuffleCards = (cards) => {
    var newCards = [],
        cardsCopy = Array.from(cards),
        initLength = cardsCopy.length;

    while (newCards.length < initLength) {

        // Generate a random number, thatwill serve as the index from which to pull.
        // The random number has a domain of 0 to n number of cards left in the deck.
        let num = Math.floor(Math.random() * cardsCopy.length);

        // Pull the index card from the initial cards
        // Because the card is pulled, mutating the cardsCopy array, we can ensure that there
        // will be no duplicates.
        newCards.push(cardsCopy.splice(num, 1)[0]);
    }
    return newCards;
}