import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const programmingSkills = [
    { name: 'Python', level: 90, color: 'from-blue-500 to-cyan-500', icon: '🐍' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500', icon: '⚡' },
    { name: 'PHP', level: 80, color: 'from-purple-500 to-pink-500', icon: '🐘' },
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500', icon: '🌐' },
    { name: 'CSS', level: 85, color: 'from-blue-400 to-indigo-500', icon: '🎨' },
  ];

  const frameworkSkills = [
    { name: 'React.js', level: 85, color: 'from-blue-400 to-cyan-400', icon: '⚛️' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500', icon: '🟢' },
    { name: 'Laravel', level: 75, color: 'from-red-500 to-pink-500', icon: '🔴' },
  ];

  const otherSkills = [
    { name: 'Git', level: 85, color: 'from-orange-600 to-red-600', icon: '📦' },
    { name: 'MySQL', level: 80, color: 'from-blue-600 to-indigo-600', icon: '🗄️' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div className="mb-8 group">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
            {skill.name}
          </span>
        </div>
        <span className="text-lg font-bold text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 0.1}s`
          }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );

  const SkillsSection = ({ title, skills }) => (
    <div className="animate-fade-in-up">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b-2 border-gray-200 dark:border-gray-700">
        {title}
      </h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill} index={index} />
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
              <SkillsSection title="Programming Languages" skills={programmingSkills} />
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
              <SkillsSection title="Frameworks & Libraries" skills={frameworkSkills} />
              <div className="mt-12">
                <SkillsSection title="Tools & Technologies" skills={otherSkills} />
              </div>
            </div>
          </div>
          
          {/* Tech Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
              { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
              { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
              { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' }
            ].map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain" />
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
