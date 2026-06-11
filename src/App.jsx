import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';


const App = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto bg-black'>
      <Navbar/>
      <main>
        <Hero/>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Services></Services>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>

  );
};

export default App;