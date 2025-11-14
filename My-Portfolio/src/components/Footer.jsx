import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer({ links, fullName }) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mt-20 py-10 text-center border-t dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
    >
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"></div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-pulse">
        {fullName}
      </h3>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
        {links?.github && (
          <motion.a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <FaGithub size={22} />
          </motion.a>
        )}

        {links?.linkedin && (
          <motion.a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={22} />
          </motion.a>
        )}

        {links?.instagram && (
          <motion.a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-800 dark:text-gray-300 hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={22} />
          </motion.a>
        )}

        {links?.email && (
          <motion.a
            href={`mailto:${links.email}`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-800 dark:text-gray-300 hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={22} />
          </motion.a>
        )}
      </div>

      {/* Copyright text */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} {fullName}. All rights reserved.
      </p>
    </motion.footer>
  );
}
