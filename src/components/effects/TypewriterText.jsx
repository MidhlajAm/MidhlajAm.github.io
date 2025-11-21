import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 50, className = '', onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, speed, onComplete]);

    return (
        <span className={`${className}`}>
            {displayedText}
            <span className="animate-pulse">_</span>
        </span>
    );
};

export default TypewriterText;
