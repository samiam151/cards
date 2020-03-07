import React, { useContext } from "react";
import { CardContext } from "./CardContext";

import { Container, Row, Col, Button } from "react-bootstrap";

export const Header = ({...props}) => {
    const context = useContext(CardContext);

    return (
        <header>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1>Playing with Cards!</h1>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className="header__actions">
                            <Button variant="success" onClick={() => context.drawCard()}>Draw Card</Button>
                            <Button variant="danger" onClick={() => context.shuffleCards()}>Shuffle Cards</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}