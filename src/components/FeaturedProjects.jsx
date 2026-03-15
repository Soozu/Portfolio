import { ExternalLink, Globe, Server, Monitor, Shield, Ticket, Users, Building2 } from 'lucide-react';

const FeaturedProjects = () => {
  const deployedProjects = [
    {
      id: 1,
      title: 'Cybence IT Solutions',
      description: 'A comprehensive IT solutions company website showcasing services including web development, software solutions, IT consulting, and digital transformation services for businesses.',
      url: 'https://cybenceitsolutions.com',
      type: 'Business Website',
      icon: Building2,
      features: ['Responsive Design', 'Modern UI/UX', 'SEO Optimized', 'Contact Integration'],
      gradient: 'from-blue-600 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      status: 'Live'
    },
    {
      id: 2,
      title: 'DepEd Imus City Ticketing System',
      description: 'An efficient ticketing and support management system developed for the Department of Education in Imus City. Streamlines issue tracking, request management, and communication between schools and the division office.',
      url: 'https://ticketing.depedimuscity.com',
      type: 'Government System',
      icon: Ticket,
      features: ['Ticket Management', 'User Authentication', 'Real-time Updates', 'Report Generation'],
      gradient: 'from-emerald-600 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Face Recognition Attendance System',
      description: 'An advanced biometric attendance system deployed for Imus City government. Utilizes facial recognition technology for accurate and contactless employee attendance tracking and management.',
      url: null,
      type: 'Enterprise System',
      icon: Users,
      features: ['Facial Recognition', 'Attendance Tracking', 'Employee Management', 'Secure Database'],
      gradient: 'from-violet-600 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10',
      status: 'Deployed On-Site'
    }
  ];

  return (
    <section id="featured-projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
            <Globe className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Deployed & Live</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications deployed and actively serving users across different organizations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {deployedProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent transition-all duration-500`}>
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Icon & Status */}
                    <div className={`lg:w-72 p-8 bg-gradient-to-br ${project.bgGradient} flex flex-col items-center justify-center gap-6 border-b lg:border-b-0 lg:border-r border-gray-200/50 dark:border-gray-700/50`}>
                      <div className={`p-6 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <IconComponent size={48} className="text-white" />
                      </div>
                      <div className="text-center">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                          project.status === 'Live' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></span>
                          {project.status}
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{project.type}</p>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                          {project.title}
                        </h3>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-target inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm font-semibold whitespace-nowrap"
                          >
                            <ExternalLink size={16} />
                            Visit Site
                          </a>
                        )}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className={`px-4 py-2 text-sm font-medium bg-gradient-to-r ${project.bgGradient} rounded-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Projects Deployed', value: '3+', icon: Server },
            { label: 'Users Served', value: '500+', icon: Users },
            { label: 'Systems Active', value: '100%', icon: Monitor },
            { label: 'Client Satisfaction', value: 'High', icon: Shield },
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3">
                  <StatIcon className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
