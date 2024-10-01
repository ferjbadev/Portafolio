import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Narbar'
import Projects from './Components/Projects'

function App() {

  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
