import React from 'react';
import prepopSvg from '../assets/prepop.de942ac6.svg';
import poppedSvg from '../assets/popped.612d3817.svg';
import originalPita from '../assets/OriginalPita.png';

const Bubble = ({ isPopped, isWinner, onClick, id }) => {
  const getBackgroundImage = () => {
    if (isPopped) {
      if (isWinner) {
        return `url("${originalPita}")`;
      }
      return `url("${poppedSvg}"), radial-gradient(closest-side, rgba(0, 0, 0, .15), rgba(0, 0, 0, .1))`;
    }
    return `url("${prepopSvg}"), radial-gradient(closest-side, rgba(0, 0, 0, 0), rgba(0, 0, 0, .05) 70%, rgba(255, 255, 255, 0) 80%)`;
  };

  const style = {
    backgroundImage: getBackgroundImage(),
    transform: isPopped ? 'scale(0.95)' : 'scale(1)',
    pointerEvents: isPopped ? 'none' : 'auto',
  };

  return (
    <div 
      className={`bubble ${isPopped ? 'popped' : ''} ${isWinner ? 'winner' : ''}`} 
      onClick={onClick}
      style={style}
      data-index={id}
    >
    </div>
  );
};

export default Bubble;
