import { useState } from 'react';
import './App.css';
import InputShortener from './components/InputShortener';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <AnimatedBackground />
    </div>
  );
}

export default App;