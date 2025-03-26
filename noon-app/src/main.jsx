import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Topnavbar from './Components/Topnavbar.jsx'
import NavProducts from './Components/NavProducts.jsx'
import Body from './Components/body.jsx'
import Recommened from './Components/recommended.jsx'
import Ramzan from './Components/ramzan.jsx'
import Moreonfaishon from './Components/moreonfaishon.jsx'
import Footer from './Components/Footer.jsx'
import Helpcenter from './Components/helpcenter.jsx'
import Prodctsfooter from './Components/productsfooter.jsx'



createRoot(document.getElementById('root')).render(
  <>
    <Topnavbar />
    <NavProducts />
    <Body />
    <Recommened />
    <Ramzan /> 
    <Moreonfaishon />
    <Footer />
    <Helpcenter />
    <Prodctsfooter />
  </>
)


