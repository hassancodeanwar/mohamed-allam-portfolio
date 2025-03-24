import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <Hero />
      <About />
      
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;