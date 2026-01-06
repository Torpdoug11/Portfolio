import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Business Website Platform',
    description: 'A modern, responsive website builder for small businesses with SEO optimization and analytics integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/project1.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Portfolio Showcase System',
    description: 'A customizable portfolio template with dark mode and project filtering capabilities.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    image: '/project2.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Secure Web Application',
    description: 'A full-stack application with user authentication, data encryption, and role-based access control.',
    tags: ['React', 'Express', 'PostgreSQL', 'JWT'],
    image: '/project3.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Cloud-Integrated Dashboard',
    description: 'Real-time data visualization dashboard with cloud storage integration and responsive design.',
    tags: ['React', 'AWS', 'D3.js', 'Firebase'],
    image: '/project4.jpg',
    github: '#',
    demo: '#',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="card overflow-hidden group"
    >
      <div className="relative overflow-hidden rounded-t-lg h-48 bg-gray-200 dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
              aria-label="View on GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
              aria-label="View Live Demo"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
