import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "./CardContext";
import { Card } from "./Card";

import { Row, Col } from "react-bootstrap";

export const CardDisplay = ({ ...props }) => {
    const { cards, activeCard, ...context} = useContext(CardContext);

    return (
        <div className="cardDisplay">
            <button onClick={() => context.shuffleCards()}>shuffle</button>
            <button onClick={() => context.drawCard()}>draw</button>
            <Row>
                <Col xs={12} md={4}>    
                    <p>Cards Left: {cards.length}</p>
                    {cards.map((card, index) => (
                        <Card key={`card--${index}`} value={card.value} imageFile={card.imageFile} />
                    ))}
                </Col>
                
                <Col xs={12} md={8}>
                    { 
                        activeCard === null ? <noscript/> :
                        <Card value={activeCard.value} imageFile={activeCard.imageFile} active /> 
                    }
                </Col>
            </Row>
        </div>
    );
}