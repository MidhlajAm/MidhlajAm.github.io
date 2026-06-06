import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { SoundProvider } from './context/SoundContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SoundProvider>
          <App />
        </SoundProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
