import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Klaro Docs',
      description: 'Document Analysis Platform with AI Integration',
      technologies: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'AI/ML', 'PDF Processing'],
      highlights: [
        'Engineered a full-stack document analysis platform integrating Google\'s Gemini AI for automated document scoring and feedback',
        'Built secure PDF processing pipeline with efficient file handling and text extraction',
        'Developed responsive UI using Next.js and Tailwind CSS with real-time feedback',
        'Implemented RESTful API architecture with robust error handling and logging'
      ],
      link: 'https://klaro-docs.vercel.app/',
      github: null,
      logo: '/klaro.png',
      logoSize: 'w-48 h-48'
    },
    {
      title: 'Eclipse ADHD Blocker',
      description: 'Chrome Extension for ADHD Management',
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Chrome Extension APIs'],
      highlights: [
        'Developed a productivity-focused Chrome extension to help users with ADHD manage tasks and track emotional well-being',
        'Implemented features including task management, distraction logging, and mood tracking',
        'Designed and implemented a responsive UI using Tailwind CSS'
      ],
      link: 'https://chromewebstore.google.com/detail/eclipse-adhd-blocker/ddgpmapoeniaajondpdgpkoopodpecid',
      github: null,
      logo: '/eclipse.png',
      logoSize: 'w-48 h-48'
    },
    {
      title: 'Nexus Ultra',
      description: 'Code Snippets Manager',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Render'],
      highlights: [
        'Designed and developed a full-stack Django web app for storing, organizing, and searching code snippets',
        'Implemented secure user authentication and personalized snippet libraries',
        'Deployed to Render with managed PostgreSQL database'
      ],
      link: 'https://nexus-ultra.onrender.com',
      github: null,
      logo: '/nexus.png',
      logoSize: 'w-48 h-48'
    },
    {
      title: 'WAYPOINT',
      description: 'AI Life Simulation Platform',
      technologies: ['React', 'Express.js', 'Gemini AI'],
      highlights: [
        'Built full-stack application that generates personalized life roadmaps integrated with AI',
        'Implemented rate limiting system and secure API integration with Google\'s Gemini AI',
        'Developed responsive UI with modern React practices and RESTful API endpoints'
      ],
      link: null,
      github: 'https://github.com/Bryxel/WAYPOINT-Life-Simulator',
      logo: '/waypoint.png',
      logoSize: 'w-48 h-48'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className={`relative ${project.logoSize} mb-4`}>
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-lg font-medium">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full text-sm font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center space-x-6">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600"
                    >
                      <span className="mr-1">Live Demo</span>
                      <span>→</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600"
                    >
                      <span className="mr-1">View Code</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 