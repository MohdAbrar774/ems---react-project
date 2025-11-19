import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextContext from './component/Context/TaskContext.jsx'
import AuthContext from './component/Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
 // <StrictMode>
 <TextContext>
     <AuthContext>
     <App />
     </AuthContext>
 </TextContext>
    
//  </StrictMode>,
)
