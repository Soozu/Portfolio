import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const programmingSkills: Skill[] = [
    { name: 'Python', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'PHP', level: 80, color: 'bg-purple-500' },
    { name: 'HTML', level: 95, color: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'bg-blue-400' },
  ];

  const frameworkSkills: Skill[] = [
    { name: 'React.js', level: 85, color: 'bg-blue-400' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Laravel', level: 75, color: 'bg-red-500' },
  ];

  const otherSkills: Skill[] = [
    { name: 'Git', level: 85, color: 'bg-orange-600' },
    { name: 'MySQL', level: 80, color: 'bg-blue-600' },
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

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  const SkillsSection = ({ title, skills }: { title: string, skills: Skill[] }) => (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <SkillsSection title="Programming Languages" skills={programmingSkills} />
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <SkillsSection title="Frameworks & Libraries" skills={frameworkSkills} />
              <div className="mt-8">
                <SkillsSection title="Tools & Technologies" skills={otherSkills} />
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-16 h-16 mb-3" />
              <span className="text-gray-700 dark:text-gray-300">Python</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="w-16 h-16 mb-3" />
              <span className="text-gray-700 dark:text-gray-300">React</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" className="w-16 h-16 mb-3" />
              <span className="text-gray-700 dark:text-gray-300">PHP</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16 mb-3" />
              <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;