import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/colors.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);