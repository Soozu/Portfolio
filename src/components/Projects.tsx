import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { fetchGitHubData, type GitHubRepo } from '../utils/github';

const Projects = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGitHubData = async () => {
      try {
        setIsLoading(true);
        const { repos } = await fetchGitHubData('Soozu');
        setProjects(repos);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadGitHubData();
  }, []);

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500 dark:text-red-400">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Here are some of my recent projects from GitHub that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.language && (
                    <span className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                      {project.language}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Star size={16} />
                      {project.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <GitFork size={16} />
                      {project.forks_count}
                    </span>
                  </div>
                  <a 
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Soozu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-md"
          >
            <Github size={20} /> View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;