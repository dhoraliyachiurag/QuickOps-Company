import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact({ contactEmail }) {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-20 px-6 text-center"
    >
      <h2 className="lightcolor text-3xl font-bold text-primary mb-8 animate-pulse">
        Get in Touch 💬
      </h2>

      <p className="lightcolor text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
        Have a project, idea, or just want to say hello and drop you number ?
        Drop a message — I’ll reply soon!
      </p>

      {/* === Contact Form Card === */}
      <motion.form
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name */}
        <div className="mb-5 text-left">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Name
          </label>
          <motion.input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        {/* Email */}
        <div className="mb-5 text-left">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Email
          </label>
          <motion.input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        {/* Message */}
        <div className="mb-6 text-left">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Message
          </label>
          <motion.textarea
            id="message"
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-3 rounded-lg bg-gray-900 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          className="w-full py-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPaperPlane /> Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
