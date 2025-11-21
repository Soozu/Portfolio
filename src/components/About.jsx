import { Code, Brain, Zap, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Creating responsive, user-friendly web applications with modern technologies and frameworks.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0s'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Breaking down complex problems and finding efficient, elegant solutions through code.',
      gradient: 'from-purple-500 to-pink-500',
      delay: '0.1s'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Always expanding my skills and knowledge to stay current with the latest technologies and best practices.',
      gradient: 'from-yellow-500 to-orange-500',
      delay: '0.2s'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Introduction Text */}
          <div className="mb-16 text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="mb-6">
              I'm a passionate <span className="font-semibold text-gray-900 dark:text-white">Full Stack Developer</span> with expertise in Python, JavaScript, PHP, and web technologies. I love turning complex problems into elegant solutions and building user-friendly applications.
            </p>
            <p>
              My focus is on web development, automation, and educational tools, constantly learning and improving my skills to create better software solutions.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="cursor-target group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-scale-in"
                  style={{ animationDelay: feature.delay }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`flex justify-center mb-6 p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Code Block */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">developer.js</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="text-yellow-500" size={24} />
                My Developer Profile
              </h3>
              <div className="text-gray-800 dark:text-gray-200 font-mono text-sm overflow-x-auto">
                <pre className="p-6 bg-gray-900 dark:bg-black rounded-lg shadow-inner">
                  <code className="text-green-400">
{`const soozu = {
  languages: ["Python", "JavaScript", "PHP", "HTML", "CSS"],
  frameworks: ["React.js", "Node.js", "Laravel"],
  interests: ["Web Development", "Automation", "Educational Tools"],
  currentFocus: "Building user-friendly web applications",
  funFact: "I love turning complex problems into elegant solutions!"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
