import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Topnavbar from './Topnavbar.jsx'
import Body from './body.jsx'
import Img from './img.jsx'
import Recommened from './recommended.jsx'
import Ramzan from './ramzan.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Topnavbar />
    <Body />
    <Recommened />
    <Ramzan />
  </>
)


