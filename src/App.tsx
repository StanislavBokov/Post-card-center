import React from 'react';
import { Toolbar } from './components';
import {ModalContainer} from "./containers/ModalContainer/ModalContainer";

function App() {
  return (
      <>
        <ModalContainer />
        <div className="App">
          <header className="App-header" data-testid="header">

          </header>
          <main data-testid="main">
            <Toolbar />
          </main>
          <footer data-testid="footer">
            i am the footer!!!
          </footer>
        </div>
      </>
  );
}

export default App;
