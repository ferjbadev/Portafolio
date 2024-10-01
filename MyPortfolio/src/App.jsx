import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Narbar from './Components/Narbar'
import Projects from './Components/Projects'

function App() {

  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Narbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
