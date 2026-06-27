import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './themorethemerrier.css'
import App from './App.jsx'

document.body.classList.add('theme-light')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App hideStayTravel />
  </StrictMode>,
)
