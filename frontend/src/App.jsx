import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar'
import Hero from './Section/hero'
import Skills from './Section/skills'
import Projects from './Section/projects'
import Experiance from './Section/Experiance'
import Whyme from './Section/Whyme'
import Contact from './Section/Contact'
import Footer from './Components/Footer'
import Portfolio from './Section/Portfolio'
import GlobalBackground from './Components/GlobalBackground'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Toaster } from 'react-hot-toast';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <Skills />
    <Projects />
    <Experiance />
    <Whyme />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToHash />
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <div className="bg-transparent min-h-screen font-main relative">
          <Toaster position="bottom-right" toastOptions={{
            style: {
              background: '#0a0a0a',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
            }
          }}/>
          <GlobalBackground />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ReactLenis>
    </Router>
  )
}

export default App
