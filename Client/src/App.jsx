import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Technologies1 from './Components/Technologies1';
import Projects from './Components/Projects';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import NotFound from './Components/NotFound';

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
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <main>
        <Routes>
          <Route path="/" element={<><Home /><Technologies1 /><Projects /></>} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
