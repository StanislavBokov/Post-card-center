import React from 'react';
import logo from './logo.svg';
import { Toolbar } from './components';

function App() {
  return (
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
  );
}

export default App;
