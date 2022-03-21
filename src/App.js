import { useState } from 'react';
import './App.css';
import InputShortener from './components/InputShortener';
import AnimatedBackground from './components/AnimatedBackground';
import LinkResult from './components/LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <AnimatedBackground />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;