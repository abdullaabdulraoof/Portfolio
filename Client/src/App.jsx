import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Technologies1 from './Components/Technologies1';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Technologies1 />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/technologies1" element={<Technologies1 />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
