import React, { Component } from 'react';
import { CardContextProvider } from './CardContext';
import { CardDisplay } from './CardDisplay';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <CardContextProvider>
        <Container>
          <CardDisplay />
        </Container>
      </CardContextProvider>
    );
  }
}

export default App;
