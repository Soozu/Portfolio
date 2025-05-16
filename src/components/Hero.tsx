import { useEffect, useState, useContext } from 'react';
import { ArrowDown, Github, Instagram, ExternalLink } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  
  const textsToType = [
    'Full Stack Developer',
    'Python Enthusiast',
    'React.js Developer',
    'PHP Specialist'
  ];

  useEffect(() => {
    const text = textsToType[currentTextIndex];
    let typingTimer: ReturnType<typeof setTimeout>;
    let deletingTimer: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (typedText.length < text.length) {
        typingTimer = setTimeout(() => {
          setTypedText(text.substring(0, typedText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        typingTimer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        deletingTimer = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentTextIndex((currentTextIndex + 1) % textsToType.length);
      }
    }

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(deletingTimer);
    };
  }, [typedText, currentTextIndex, isTyping, textsToType]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
              <img 
                src="/logo.png"
                alt="Soozu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            👋 Hello World, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Soozu!</span>
          </h1>
          
          <div className="h-12 mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{typedText}</span>
              <span className="inline-block w-1 h-8 bg-blue-500 ml-1 animate-blink"></span>
            </p>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about creating elegant solutions to complex problems through clean, efficient code.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="https://github.com/Soozu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-700 dark:text-gray-300"
            >
              <Github size={20} /> GitHub
            </a>
            <a 
              href="https://www.instagram.com/soozuu1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-700 dark:text-gray-300"
            >
              <Instagram size={20} /> Instagram
            </a>
            <a 
              href="https://soozu.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-700 dark:text-gray-300"
            >
              <ExternalLink size={20} /> Portfolio
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;