import { motion } from 'framer-motion';

const skills = {
  'Frontend & Website Building': [
    { name: 'React', level: 90 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Responsive Design', level: 90 },
    { name: 'UI/UX Design', level: 80 },
  ],
  'Backend & Cloud': [
    { name: 'Node.js', level: 85 },
    { name: 'AWS (EC2, S3, Lambda)', level: 75 },
    { name: 'Firebase', level: 80 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'Linux', level: 80 },
    { name: 'Networking', level: 75 },
  ],
  'Security & Automation': [
    { name: 'Cybersecurity', level: 80 },
    { name: 'Data Protection', level: 80 },
    { name: 'Workflow Automation', level: 85 },
    { name: 'CI/CD', level: 75 },
    { name: 'System Scripting', level: 80 },
    { name: 'Low-Code Tools', level: 70 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and skills I've been working with recently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category}</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
