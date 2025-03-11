import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
// import WhyChooseUs from './components/WhyChooseUs.jsx'
//import Header from './components/Header.jsx'
//import Rating from './components/Rating.jsx'
//import Population from './components/Population.jsx'
//import UserLogin from './pages/user/UserLogin.jsx'
import CaptainLogin from './pages/captain/CaptainLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainLogin />
  </StrictMode>,
)
