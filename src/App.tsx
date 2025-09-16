import BioComponent from './components/BioComponent'
import Contact from './components/Contact'
import Education from './components/Education'
import Navbar from './components/NavBar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'


function App() {

  return (
    <>      
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-15'>
        <BioComponent/>    
        <Contact />       
        <Education/>
        <Projects/>
        <Technologies/>
        
      </div>
    </>
  )
}

export default App
