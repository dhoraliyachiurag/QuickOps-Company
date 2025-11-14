import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero({ data }) {
  const [showResume, setShowResume] = useState(false);
  const resumeFile = 'src/assets/resume.pdf'; // my resume

  return (
    <section id="home" className="pt-16 text-center relative">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex justify-center mb-10"
      >
        <div className="relative w-56 h-56 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400">
          <motion.img
            src={data.profileImage || '/profile.jpg'}
            alt="Profile"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold leading-tight"
      >
        Hi 👋 I’m{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          {data.fullName}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
      >
        {data.title}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex justify-center gap-4 flex-wrap"
      >
        {/* Resume Button */}
        <button
          onClick={() => setShowResume(true)}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 transition-transform"
        >
          My Resume
        </button>

        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:scale-105 transition-transform"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-3 right-4 text-gray-700 dark:text-gray-300 text-2xl hover:text-red transition"
              >
                ×
              </button>

              {/* Resume Preview */}
              {resumeFile.endsWith('.pdf') ? (
                <iframe
                  src={resumeFile}
                  title="My Resume"
                  className="w-full h-[85vh] border-none rounded-b-2xl"
                ></iframe>
              ) : (
                <div className="flex justify-center items-center h-[85vh] bg-gray-50 dark:bg-gray-800">
                  <img
                    src={resumeFile}
                    alt="My Resume"
                    className="max-h-[80vh] w-auto object-contain rounded-lg shadow-md"
                  />
                </div>
              )}

              {/* Download Button */}
              <div className="p-4 text-center border-t border-gray-200 dark:border-gray-700">
                <a
                  href={resumeFile}
                  download
                  className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow hover:scale-105 transition-transform"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
