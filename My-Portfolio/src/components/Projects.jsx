import { motion } from 'framer-motion';

export default function Projects({ projects }) {
  return (
    <motion.section
      id="projects"
      className="py-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary mb-8">PROJECTS</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            className="lightcolor bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="lightcolor text-gray-800 dark:text-gray-300 mb-3">
              {p.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm border rounded-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={p.liveUrl}
                target="_blank"
                className="text-sm px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md shadow hover:scale-105 transition-transform"
              >
                Live Demo
              </a>
              <a
                href={p.repoUrl}
                target="_blank"
                className="text-sm px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
