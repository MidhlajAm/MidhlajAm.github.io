import React, { useState, useEffect } from 'react';

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if device is desktop
        const checkDesktop = () => {
            setIsDesktop(window.matchMedia('(min-width: 1024px) and (hover: hover)').matches);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkDesktop);
        };
    }, []);

    // Don't render on mobile/tablet
    if (!isDesktop) return null;

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
            style={{
                background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
                animation: 'glow-pulse 3s ease-in-out infinite',
            }}
        />
    );
};

export default CursorGlow;
