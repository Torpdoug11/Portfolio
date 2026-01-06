import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { DesignModeSelector } from './components/ui/DesignModeSelector';
import Navbar from './components/Navbar';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './styles/global.css';

// Main App Wrapper
const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-200">
      <Navbar />
      <DesignModeSelector />
      
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Andrew Mokosa Elangwe Jr
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Full-Stack Developer | Cybersecurity Engineer | Cloud Specialist
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a 
                  href="#projects" 
                  className="btn btn-primary"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/30 filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                I design and build modern, responsive websites and secure, scalable applications, with strong foundations in cloud systems, networking, and cybersecurity.
              </p>
              <p className="text-lg">
                With expertise in full-stack development and a passion for creating intuitive user experiences, I help businesses establish a strong online presence through custom web solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-900/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Andrew Mokosa Elangwe Jr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppWrapper;
