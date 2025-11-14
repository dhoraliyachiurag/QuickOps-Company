import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

export default function Header({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto flex justify-between items-center py-3 px-5 md:px-8">
        {/* Logo / Name */}
        <a
          href="#home"
          className="font-extrabold text-xl md:text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-pulse tracking-wide"
        >
          MyPortfolio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative text-gray-800 dark:text-gray-100 font-medium hover:text-cyan-500 transition-colors"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-cyan-500 scale-x-0 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Right Section: Theme Toggle + Menu */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
          >
            {isDark ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-800 text-lg" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4 px-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 dark:text-gray-100 hover:text-cyan-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
