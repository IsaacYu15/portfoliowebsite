import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import Navbar from "./sections/navbar/Navbar"
import Work from "./sections/work/Work"

const App = () => {
  return (
    //import componets 
    <main>
        <Navbar/>
        <Header/>
        <Work/>
        <Contact/>
        <Footer/>

    </main>
  )
}

export default App
