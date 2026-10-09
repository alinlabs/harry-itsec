import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { ViewportProvider } from './context/ViewportContext';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <LanguageProvider>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </LanguageProvider>
  </ThemeProvider>
);
