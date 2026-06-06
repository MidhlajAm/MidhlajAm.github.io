import { createContext, useContext } from 'react';

export const SoundContext = createContext();

export const useRetroSound = () => useContext(SoundContext);
