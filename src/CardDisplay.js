import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "./CardContext";
import { Card } from "./Card";

import { Row, Col, Alert, Badge, Button } from "react-bootstrap";

export const CardDisplay = ({ ...props }) => {
    const { cards, activeCard, ...context } = useContext(CardContext);

    return (
        <div className="cardDisplay">

            {/* Card Containers */}
            <Row>
                {/* Deck Container */}
                <Col xs={12} md={5}>
                    <h2>The Deck <Badge variant="secondary">{cards.length}</Badge></h2>
                    <div className="cardDisplay__deck">
                        {
                            cards.length === 0 ? <Alert variant="info">No more cards! You can shuffle the deck, or draw to re-stack.</Alert> : 
                            cards.map((card, index) => (
                                <Card key={`card--${index}`} value={card.value} imageFile={card.imageFile} />
                            ))
                        }
                    </div>
                </Col>

                {/* Active Card Container */}
                <Col xs={12} md={7}>
                    <h2>Active Card</h2>
                    <div className="cardDisplay__activeCard">
                        {
                            activeCard === null ?
                                <Alert variant="info">Please draw a card using the draw button!</Alert> :
                                <Card active value={activeCard.value} imageFile={activeCard.imageFile} />
                        }
                    </div>
                </Col>
            </Row>
        </div>
    );
}