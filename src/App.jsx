import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"
import {Outlet} from "react-router-dom"


function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
