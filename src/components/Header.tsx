import { useState, useEffect, useContext } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Soozu
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 w-full animate-fadeIn">
          <div className="px-4 py-3 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;