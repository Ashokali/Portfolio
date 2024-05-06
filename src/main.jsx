import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Sugar } from 'react-preloaders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Sugar color={'#fafafa'} background="#6366f1" time={3000} animation="slide-down"  />
  </React.StrictMode>,
)
