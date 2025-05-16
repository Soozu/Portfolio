import { Code, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="mb-4">
              I'm a passionate Full Stack Developer with expertise in Python, JavaScript, PHP, and web technologies. I love turning complex problems into elegant solutions and building user-friendly applications.
            </p>
            <p>
              My focus is on web development, automation, and educational tools, constantly learning and improving my skills to create better software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400">
                  <Code size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Creating responsive, user-friendly web applications with modern technologies and frameworks.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-500 dark:text-purple-400">
                  <Brain size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Breaking down complex problems and finding efficient, elegant solutions through code.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-500 dark:text-pink-400">
                  <Zap size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Always expanding my skills and knowledge to stay current with the latest technologies and best practices.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Developer Profile</h3>
            <div className="text-gray-600 dark:text-gray-400 font-mono text-sm overflow-x-auto">
              <pre className="p-4 bg-gray-100 dark:bg-gray-900 rounded">
{`const soozu = {
  languages: ["Python", "JavaScript", "PHP", "HTML", "CSS"],
  frameworks: ["React.js", "Node.js", "Laravel"],
  interests: ["Web Development", "Automation", "Educational Tools"],
  currentFocus: "Building user-friendly web applications",
  funFact: "I love turning complex problems into elegant solutions!"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;