import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import UserContext from './context/UserContext.jsx'
import CaptainContext from './context/CaptainContext.jsx'
import SocketContextProvider from './context/SocketContext.jsx'
import AdminContext from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <AdminContext>
    <CaptainContext>
      <UserContext>
        <SocketContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SocketContextProvider>
      </UserContext>
    </CaptainContext>
  </AdminContext>
)
