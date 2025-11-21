import React from 'react';

const PixelCard = ({ children, className = '' }) => {
    return (
        <div className={`bg-black border-4 border-white p-6 relative ${className}`}>
            {/* Corner decorations for extra retro feel */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white" />

            {children}
        </div>
    );
};

export default PixelCard;
