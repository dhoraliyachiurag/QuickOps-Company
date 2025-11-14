import { motion } from 'framer-motion';

export default function About({ data }) {
  return (
    <motion.section
      id="about"
      className="py-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6">ABOUT ME</h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        {data.shortBio}
      </p>

      <motion.div
        className="lightcolor mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-xl mb-2">🎯 My Focus</h3>
          <p className="text-gray-800 dark:text-gray-300">
            Building fast, accessible, and beautiful user interfaces using React
            & Tailwind CSS.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-xl mb-2">💡 Philosophy</h3>
          <p className="text-gray-800 dark:text-gray-300">
            Design with empathy, code with clarity, and deliver experiences
            users remember.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
