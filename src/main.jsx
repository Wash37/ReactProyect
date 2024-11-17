import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { fragment } from 'react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
