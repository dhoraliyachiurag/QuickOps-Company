import { motion } from 'framer-motion';

export default function Experience({ experience }) {
  return (
    {
      /**<section id="experience" className="mt-12">
      <h3 className="text-2xl font-semibold">Experience</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="font-medium">Frontend Developer — QuickOps</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            just started - 5 May 2026
          </p>
          <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300">
            <li>• Built responsive React apps and reusable components.</li>
            <li>• Improved performance and reduced bundle sizes.</li>
          </ul>
        </div>
      </div>
    </section>**/
    },
    (
      <motion.section
        id="experience"
        className="py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-primary mb-8">EXPERIENCE</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experience.map((e, index) => (
            <motion.div
              key={index}
              className="lightcolor bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-2">{e.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {e.startend}
              </p>
              <ul className="lightcolor mt-3 text-sm text-gray-800 dark:text-gray-300">
                {e.points.map((p) => (
                  <li key={p}>•{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>
    )
  );
}
