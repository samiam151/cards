import React, { Component } from 'react';
import { CardContextProvider } from './CardContext';
import { CardDisplay } from './CardDisplay';
import { Container } from 'react-bootstrap';
import { Header } from "./Header";

class App extends Component {
  render() {
    return (
      <CardContextProvider>
        <Header />
        <Container>
          <CardDisplay />
        </Container>
      </CardContextProvider>
    );
  }
}

export default App;
