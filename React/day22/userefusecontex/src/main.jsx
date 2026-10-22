import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Provide from './provide/Provide.jsx'

createRoot(document.getElementById('root')).render(
<Provide>
  <App/>
</Provide>
)
