import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleTheme }) => {
    return (
        <nav className='fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-gray-700'>
            <div className='flex h-[64px] justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:text-white text-black'>
                <h1 className='font-bold text-xl'>
                    Abdulla.
                </h1>
                <ul className='hidden md:flex gap-10 '>
                    <li><Link to="/" className='text-sm font-semibold'>Home</Link></li>
                    <li><Link to="/technologies1" className='text-sm font-semibold'>Technologies</Link></li>
                    <li><Link to="/projects" className='text-sm font-semibold'>Projects</Link></li>
                    <li><Link to="/contact" className='text-sm font-semibold'>Contact</Link></li>
                </ul>


                {/* 🌗 Theme Toggle Button */}
                <button onClick={toggleTheme} className='w-[28px] h-[28px]'>
                    {darkMode ? (
                        // 🌙 Moon icon (for light mode, click to go dark)
                        <img src="./assets/moon.svg" alt="Moon" className="invert" />
                    ) : (
                        // ☀️ Sun icon (for dark mode, click to go light)
                            <img src="./assets/sun.svg" alt="Sun" className="" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
