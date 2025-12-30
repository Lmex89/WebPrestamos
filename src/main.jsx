import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { PaymentsProvider } from './context/PaymentsContext';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PaymentsProvider>
          <App />
        </PaymentsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
