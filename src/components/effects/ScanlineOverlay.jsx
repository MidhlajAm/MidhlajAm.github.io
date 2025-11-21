import React from 'react';

const ScanlineOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-full w-full">
            {/* Scanlines */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    background: 'linear-gradient(to bottom, transparent 50%, #000 50%)',
                    backgroundSize: '100% 4px'
                }}
            />

            {/* Flicker Effect */}
            <div className="absolute inset-0 bg-white opacity-[0.02] animate-flicker pointer-events-none mix-blend-overlay" />

            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.4) 100%)'
                }}
            />
        </div>
    );
};

export default ScanlineOverlay;
