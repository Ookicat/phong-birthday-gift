import React, { useState, useEffect, useRef } from 'react';
import Bubble from './Bubble';
import popSoundFile from '../assets/399334__anthousai__plastic-bubble-wrap-single-pop.wav';
import winnerSoundFile from '../assets/indihome-paket-phoenix.mp3';
import originalPita from '../assets/OriginalPita.png';

const BubbleSheet = ({ onWin }) => {
  const totalBubbles = 10; // Increased from 3 to 30 for a better grid
  const [bubbles, setBubbles] = useState([]);
  const [winningIndex, setWinningIndex] = useState(null);
  const popAudioRef = useRef(null);
  const winnerAudioRef = useRef(null);
  const [showJumpscare, setShowJumpscare] = useState(false);

  useEffect(() => {
    // Initialize game
    const newBubbles = Array(totalBubbles).fill(false);
    setBubbles(newBubbles);
    const winner = Math.floor(Math.random() * totalBubbles);
    setWinningIndex(winner);
    console.log(`Psst. The secret is in bubble number: ${winner + 1}`);
  }, []);

  const handleBubbleClick = (index, e) => {
    if (bubbles[index]) return; // Already popped

    const newBubbles = [...bubbles];
    newBubbles[index] = true;
    setBubbles(newBubbles);

    if (index === winningIndex) {
      // Winner!
      if (winnerAudioRef.current) {
        winnerAudioRef.current.currentTime = 0;
        winnerAudioRef.current.play();
      }

      // Jumpscare logic
      setShowJumpscare(true);
      setTimeout(() => {
        setShowJumpscare(false);
        onWin();
      }, 500);

    } else {
      // Normal pop
      if (popAudioRef.current) {
        popAudioRef.current.currentTime = 0;
        popAudioRef.current.play();
      }
    }
  };

  return (
    <>
      <div id="bubble-sheet">
        {bubbles.map((isPopped, index) => (
          <Bubble
            key={index}
            id={index}
            isPopped={isPopped}
            isWinner={index === winningIndex}
            onClick={(e) => handleBubbleClick(index, e)}
          />
        ))}
      </div>
      
      <audio ref={popAudioRef} src={popSoundFile} preload="auto" />
      <audio ref={winnerAudioRef} src={winnerSoundFile} preload="auto" />

      {showJumpscare && (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: `url("${originalPita}")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }} />
      )}
    </>
  );
};

export default BubbleSheet;
