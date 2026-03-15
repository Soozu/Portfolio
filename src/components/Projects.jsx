import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, Sparkles } from 'lucide-react';
import { fetchGitHubData } from '../utils/github';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <section id="projects" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-blue-500/20"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-full border border-gray-500/20 mb-6">
            <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Open Source</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            GitHub <span className="text-gradient">Repositories</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Public repositories and open-source contributions showcasing my coding journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="cursor-target group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
              
              <div className="relative p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-yellow-500" size={20} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                      {project.name}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[80px] line-clamp-3">
                  {project.description || 'No description available'}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.topics.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.language && (
                    <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800">
                      {project.language}
                    </span>
                  )}
                </div>
                
                {/* Stats and Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-sm font-medium">
                      <Star size={16} className="text-yellow-500" />
                      {project.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-sm font-medium">
                      <GitFork size={16} className="text-blue-500" />
                      {project.forks_count}
                    </span>
                  </div>
                  <a 
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 text-sm font-semibold"
                  >
                    <Github size={16} />
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="https://github.com/Soozu"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 font-semibold text-lg"
          >
            <Github size={24} />
            View More Projects
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
