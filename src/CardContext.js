import React , { useState }from "react";
import { populateCards, shuffleCards } from "./CardService";

export const CardContext = React.createContext();

export const CardContextProvider = ({children, ...props}) => {
    const [cards, setCards] = useState(populateCards());

    function shuffle() {
        let newCards = shuffleCards(cards);
        setCards(newCards);
    }

    const initValue = {
        cards: cards,
        shuffleCards: shuffle
    };

    return (
        <CardContext.Provider value={initValue}>
            { children }
        </CardContext.Provider>
    );
}