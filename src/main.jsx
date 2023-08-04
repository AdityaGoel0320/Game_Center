import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
// Alternatively, you can import individual styles if you need to reduce bundle size:
// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
// import '@fortawesome/fontawesome-free/css/solid.min.css';
// import '@fortawesome/fontawesome-free/css/regular.min.css';
// import '@fortawesome/fontawesome-free/css/brands.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
