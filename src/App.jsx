
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        
          
        </div>

        {/* Footer Section */}
        <div className="w-full text-center py-6 mt-10">
          <p className="text-white text-lg">
            Thank you for visiting my portfolio ❤️
          </p>
          <p className="text-white text-sm mt-2">
            © Copyright 2024 - All Rights Reserved - Made With ❤️ by Shikha Gupta
          </p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
