import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-white">
      <div className="bg-white">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
