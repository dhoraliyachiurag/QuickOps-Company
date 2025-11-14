import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { SITE_DATA } from './data';
import './theme.css';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <div className="app">
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className="container mx-auto px-6 py-12">
        <Hero data={SITE_DATA} />
        <About data={SITE_DATA} />
        <Skills skills={SITE_DATA.skills} />
        <Projects projects={SITE_DATA.projects} />
        <Experience experience={SITE_DATA.experience} />
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-950">
          <Contact contactEmail={SITE_DATA.contactEmail} />
        </div>
      </main>
      <Footer links={SITE_DATA.links} fullName={SITE_DATA.fullName} />
    </div>
  );
}
