import React from 'react';
import { useRetroSound } from '../../context/SoundContext';

const RetroButton = ({ children, onClick, className = '' }) => {
    const { playClick, playHover } = useRetroSound();

    const handleClick = (e) => {
        playClick();
        if (onClick) onClick(e);
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={playHover}
            className={`
        border-2 border-white px-6 py-2 
        text-white font-press-start text-sm
        hover:bg-white hover:text-black 
        transition-none
        active:translate-y-1
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default RetroButton;
