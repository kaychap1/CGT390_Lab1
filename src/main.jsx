import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Intro from './components/Intro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header>Company Name</Header>
    <Card/>
    <Intro/>
    
  </StrictMode>,
)
