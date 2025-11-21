import React, { useEffect } from 'react';

const RetroToast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slideUp">
            <div className="border-4 border-white bg-black px-6 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠</span>
                    <p className="font-press-start text-xs sm:text-sm text-white">
                        {message}
                    </p>
                    <button
                        onClick={onClose}
                        className="ml-4 text-white hover:text-gray-400 font-press-start text-lg"
                    >
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RetroToast;
