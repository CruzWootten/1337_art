import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Text to ASCII Art Generator (TAAG)</h1>
        <textarea id="inputText" style={{ width: '234px' }}>Type Something</textarea>
        {/* Add more components or HTML elements as needed */}
      </header>
    </div>
  );
}

export default App;
