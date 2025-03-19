import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Topnavbar from './Topnavbar.jsx'
import Body from './body.jsx'
import Img from './img.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Topnavbar />
    <Body />
    <Img />
    </>
)
