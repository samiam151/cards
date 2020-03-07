import React , { useState, useEffect }from "react";
import { CardService } from "./CardService";

export const CardContext = React.createContext();

export const CardContextProvider = ({children, ...props}) => {
    const [cards, setCards] = useState(CardService.populateCards());
    const [activeCard, setActiveCard] = useState(null);

    // useEffect(() => {
    //     setNewActiveCard();
    // }, []);

    function drawCard() {
        console.log("draw card:", cards.length);
        let newCards = [...cards];

        if(cards.length === 0) {
            newCards = CardService.shuffleCards(CardService.populateCards());
        } 

        let nextCard = newCards.splice(0, 1)[0];
        setActiveCard(nextCard);
        setCards(newCards);
        
    }

    function shuffle() {
        let newCards = CardService.populateCards();
        let x = CardService.shuffleCards(newCards);        
        setCards(x);
        setActiveCard(null);
    }

    function setNewActiveCard() {
        let nextCard = cards.splice(0, 1)[0];
        setActiveCard(nextCard);
    }

    const initValue = {
        cards: cards,
        shuffleCards: shuffle,
        activeCard: activeCard,
        drawCard: drawCard
    };

    return (
        <CardContext.Provider value={initValue}>
            { children }
        </CardContext.Provider>
    );
}