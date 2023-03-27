import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-[#0a0a14]">
      <div className="bg-[#0a0a14]">
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
