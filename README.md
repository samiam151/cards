# Playing with Cards!

This is React app that allows the user to draw through a deck of cards (minus the Jokers), and re-shuffle the deck. This project uses Bootstrap for grid, styling, and other UI components.


## How to Run

* `npm run start` will start the dev server to run the project locally.
* `npm run test` will run the test in **App.test.js**.

## Project Structure

### CardService.js
This file hold the two methods for generating the card objects, which are used as the data for the Card components, shuffling the cards.

### Card.js
The Card component file. This component holds no state, and just shows a card, given the value and image file name.

### CardContext.js
I'm a big fan of using the Context API to manage state, in conjuction with the `useContext` and `useState` hooks. The Card Context maintains the state the cards, and te card that is current active. 

Using the context, both the CardDisplay component and the Header component have access to the active card, and the methods to shuffle and draw cards.

### CardDisplay.js
Since the Card Context manages the state, this component just formats the page to show the active acrd and the deck. 
