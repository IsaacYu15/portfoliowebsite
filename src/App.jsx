import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import Navbar from "./sections/navbar/Navbar"
import Portfolio from "./sections/portfolio/Portfolio"
import Work from "./sections/work/Work"
//40:36

const App = () => {
  return (
    //import componets 
    <main>
        <Navbar/>
        <Header/>
        <Work/>
        <Portfolio/>
        <Contact/>
        <Footer/>

    </main>
  )
}

export default App
