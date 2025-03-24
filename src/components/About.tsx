import { aboutContent } from '../data/about';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 space-y-6">
          <p>{aboutContent.intro}</p>
          <p>{aboutContent.currentWork}</p>
          <p>{aboutContent.interests}</p>
        </div>
      </div>
    </section>
  );
}