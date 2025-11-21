import React, { createContext, useState, useContext } from 'react';
import useSound from 'use-sound';

// Placeholder for sound files - in a real app, these would be imported
// import clickSfx from '/sounds/click.mp3';
// import hoverSfx from '/sounds/hover.mp3';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);

    // Mock sound functions since we don't have actual files
    // In reality: const [playClick] = useSound(clickSfx, { volume: 0.5, soundEnabled: !isMuted });
    const playClick = () => {
        if (!isMuted) {
            console.log('Playing click sound');
            // new Audio('/sounds/click.mp3').play().catch(e => {}); // If files existed
        }
    };

    const playHover = () => {
        if (!isMuted) {
            console.log('Playing hover sound');
            // new Audio('/sounds/hover.mp3').play().catch(e => {});
        }
    };

    const toggleMute = () => setIsMuted(!isMuted);

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, playClick, playHover }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useRetroSound = () => useContext(SoundContext);
