import React, { useState } from 'react';
import './App.css';
import BubbleSheet from './components/BubbleSheet';
import WinnerOverlay from './components/WinnerOverlay';

function App() {
  const [isWinnerActive, setIsWinnerActive] = useState(false);

  const handleWin = () => {
    setIsWinnerActive(true);
  };

  const handleCloseOverlay = () => {
    setIsWinnerActive(false);
  };

  return (
    <>
      <header>
        <h1>Therapeutic Activity</h1>
        <p className="instructions">Pop until satisfied.</p>
      </header>

      <BubbleSheet onWin={handleWin} />

      <WinnerOverlay 
        isActive={isWinnerActive} 
        onClose={handleCloseOverlay} 
      />
    </>
  );
}

export default App;
