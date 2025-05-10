import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createScrollObserver } from './utils/scrollAnimation.ts';

// Component with scroll animation initialization
const AppWithEffects = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = createScrollObserver();
    
    // Cleanup on unmount
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithEffects />
  </StrictMode>
);