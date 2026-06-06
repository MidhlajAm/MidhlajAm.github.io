import React, { useEffect } from 'react';

const ImageModal = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain border-4 border-white"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 border-2 border-white text-white font-vt323 text-2xl flex items-center justify-center hover:bg-white hover:text-black transition-colors"
      >
        X
      </button>
    </div>
  );
};

export default ImageModal;
