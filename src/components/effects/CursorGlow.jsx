import React, { useState, useEffect } from 'react';

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
            style={{
                background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.08), transparent 70%)`,
                animation: 'glow-pulse 3s ease-in-out infinite',
            }}
        />
    );
};

export default CursorGlow;
