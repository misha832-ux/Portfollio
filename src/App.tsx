import "./App.css"
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Skills from "./components/skills"
import Education from "./components/education"
import Projects from "./components/projects"
import Research from "./components/research"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {
  return (
     <div className="app">
       <Navbar />
       <main>
          <Home/>
          <About/>
          <Skills/>
          <Education/>
          <Projects/>
          <Research/>
          <Contact/>
       </main>
       <Footer/>
     </div>
  )
}

export default App
