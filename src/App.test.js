import { CardService } from "./CardService";


describe('Populating Method', () => {
  let initalCards = CardService.populateCards();

  test("Should have 52 objects", () => {
    expect(initalCards.length).toBe(52);
  });

  test("Should have unique values", () => {
    // Be converting the card values to a Set, the values will be unique, as per the definition of a Set object.
    // Therefore, if the inital value array size is equal to the new Set size, we know 
    // that the values are unique
    let cardValues = initalCards.map(card => card.value);
    let cardValuesSet = new Set(cardValues);
    expect(cardValues.length).toBe(cardValuesSet.size);
  });
})

describe("Shuffling Method", () => {
  let initalCards = CardService.populateCards();

  test("Should still have 52 objects", () => {
    let shuffledCards = CardService.shuffleCards(initalCards);
    expect(shuffledCards.length).toBe(initalCards.length);
  });

  test("Should still have unique values", () => {
    let cardValues = initalCards.map(card => card.value);
    let shuffledCardsValues = CardService.shuffleCards(initalCards).map(card => card.value);
    let shuffledCardValueSet = new Set(shuffledCardsValues);
    expect(shuffledCardValueSet.length).toBe(cardValues.size);
  });

  test("First, last, and middle numbers should be different over 20 iterations", () => {
    // I kept the number to 20 iterations. Perhaps it should be lower, but I wanted to find a number
    // such that we can prove that the cards are shuffled, knowing that, eventually, one of these numbers
    // will match the previous iteration;
    let results = [],
      isRandom = true;
    for (let index = 0; index < 20; index++) {
      let shuffled = CardService.shuffleCards(initalCards);
      let first = shuffled[0],
        middle = shuffled[25],
        last = shuffled[51];

      if (results.length) {
        let lastFirst = shuffled[0],
          lastMiddle = shuffled[25],
          lastLast = shuffled[51];
        if (first === lastFirst ||
          middle === lastMiddle ||
          last === lastLast ) {
            isRandom = false;
          }
      }
      results.push(first, middle, last);
    }
  });
});