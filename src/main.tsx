import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './features/app'
import './styles/index.css.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
