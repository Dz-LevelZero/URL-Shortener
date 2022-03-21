import { useState } from 'react';
import './App.css';
import InputShortener from './components/InputShortener';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
    </div>
  );
}

export default App;