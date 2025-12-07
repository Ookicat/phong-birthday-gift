import React from 'react';
import memeImg from '../assets/happy-birthday-meme.png';
import originalPita from '../assets/OriginalPita.png';

const WinnerOverlay = ({ isActive, onClose }) => {
  return (
    <div 
      id="message-overlay" 
      className={isActive ? 'active' : ''} 
      // onClick={onClose} - Disabled to prevent closing
    >
      <div className="meme-container">
        <img src={memeImg} alt="Indihome Meme" />
        <div 
          id="head-target" 
          style={{ backgroundImage: `url("${originalPita}")` }}
        ></div>
      </div>
    </div>
  );
};

export default WinnerOverlay;
