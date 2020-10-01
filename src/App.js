import React, { useState } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

function App() {
  const [userInput, setUserInput] = useState('');

  const charlist = userInput.split('').map((char, index) => {
      return <Char
                character={char}
                key={index}
                clicked={() => deleteCharHandler(index)}/>;
  });

  const deleteCharHandler = (index) => {
    const text = userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    setUserInput(updatedText);
  }

  return (
    <div className="App">
      <input type="text"
             onChange={(event) => setUserInput(event.target.value)}
             value={userInput}    />
      <p>{userInput}</p>
      <Validation inputLength={userInput.length} />
      {charlist}
    </div>
  );
}

export default App;
