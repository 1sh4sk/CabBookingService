import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
// import WhyChooseUs from './components/WhyChooseUs.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
