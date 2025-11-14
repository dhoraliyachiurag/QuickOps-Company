import { motion } from 'framer-motion';

export default function Skills({ skills }) {
  return (
    <motion.section
      id="skills"
      className="py-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary mb-8">SKILLS</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {Object.entries(skills || {}).map(([category, items]) => (
          <motion.div
            key={category}
            className="lightcolor bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl font-semibold capitalize mb-6">
              {category}
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-sm border rounded-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
