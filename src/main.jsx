import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './output.css'
import { ClerkProvider } from '@clerk/clerk-react';
import { ClerkLoaded, RedirectToSignIn } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

 

