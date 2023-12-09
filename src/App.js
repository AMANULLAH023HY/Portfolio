
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles';

import { loadFull } from 'tsparticles';
import Home from './container/home/Home'
import About from './container/about/About'
import Contact from './container/contact/Contact'
import Portfolio from './container/portfolio/Portfolio'
import Resume from './container/resume/Resume'
import Skills from './container/skills/Skills'
import Navbar from './components/navBar/Navbar';
import particles from './utils.js/particles';


function App() {

  const location = useLocation()
  console.log(location);


  const handleInit = async (main) => {
    await loadFull(main)
  }


  const renderParticleJsInHomePage = location.pathname === '/';
  return (
    <div className="App">

      {/* particles */}

      {
        renderParticleJsInHomePage && (
          <Particles id='particles' options={particles} init={handleInit} />

        )
      }

      {/* navbar */}
      <Navbar />
     

      {/* main page content */}
      <div className='AppMainPageContent'>
        <Routes>

          <Route index path='/' element={<Home />} />
          
          <Route path='/about' element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
