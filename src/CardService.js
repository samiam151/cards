export const CardService = {
    shuffleCards: (cards) => {
        var newCards = [],
            cardsCopy = Array.from(cards),
            initLength = cardsCopy.length;
    
        while (newCards.length < initLength) {
    
            // Generate a random number, that will serve as the index from which to pull.
            // The random number has a domain of 0 to n number of cards left in the deck.
            let num = Math.floor(Math.random() * cardsCopy.length);
    
            // Pull the index card from the initial cards
            // Because the card is spliced, mutating the cardsCopy array, we can ensure that there
            // will be no duplicates.
            newCards.push(cardsCopy.splice(num, 1)[0]);
        }
        return newCards;
    },

    populateCards: () => {
        let cards = [],
            suits = ["clubs", "diamonds", "spades", "hearts"],
            specialCards = ["ace", "jack", "king", "queen"],
            index = 2;
    
        suits.forEach(suit => {
            for (index = 2; index <= 10; index++) {
                pushCard(index, suit);
            }
    
            specialCards.forEach(card => pushCard(card, suit));
        });
    
        function pushCard(type, suit) {
            cards.push({
                value: `${type}_of_${suit}`,
                imageFile: `/images/${type}_of_${suit}.png`
            });
        }
        return cards;
    }
}