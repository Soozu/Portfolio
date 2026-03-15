import { useEffect, useState, useContext } from 'react';
import { ArrowDown, Github, Instagram, Sparkles } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  
  const textsToType = [
    'Full Stack Developer',
    'IT Solutions Specialist',
    'React.js Developer',
    'System Architect',
    'PHP & Python Developer'
  ];

  useEffect(() => {
    const text = textsToType[currentTextIndex];
    let typingTimer;
    let deletingTimer;

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
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image with Glow Effect */}
          <div className="flex justify-center mb-8 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl ring-4 ring-blue-500/20 dark:ring-purple-500/20">
                <img 
                  src="/logo.png"
                  alt="Soozu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Sparkles className="text-yellow-400" size={24} />
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
            <span className="block mb-2">👋 Hello World,</span>
            <span className="block">
              I'm <span className="text-gradient animate-gradient bg-clip-text text-transparent bg-[length:200%_auto]">Soozu!</span>
            </span>
          </h1>
          
          {/* Typing Animation */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              <span className="text-gradient">{typedText}</span>
              <span className="inline-block w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 ml-2 animate-blink"></span>
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building enterprise solutions for government institutions and businesses. From face recognition systems to IT platforms, I turn complex requirements into elegant, scalable applications.
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://github.com/Soozu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-target group flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all duration-300 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200/50 dark:border-gray-700/50"
            >
              <Github size={20} className="group-hover:scale-125 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
            <a 
              href="https://www.instagram.com/soozuu1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-target group flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all duration-300 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200/50 dark:border-gray-700/50"
            >
              <Instagram size={20} className="group-hover:scale-125 transition-transform" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
          
          {/* Scroll Button */}
          <button
            onClick={scrollToAbout}
            className="cursor-target group inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg hover:shadow-xl hover:scale-110 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
