import React, { useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {

  const [showParagraph, setShowParagraph] = useState(false)

  console.log("app running")

  const toggleParagraphHandler = () =>{
    setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>

      {/* how state changes render on dom */}
      {/* {showParagraph && <p>This is new!</p>} */}

      <DemoOutput show={false}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
