import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  //Commentnig since React's Strict Mode intentionally mounts components twice in development mode to help catch side effects and potential bugs.
  // <StrictMode>
    <App />
  // </StrictMode>,
)
