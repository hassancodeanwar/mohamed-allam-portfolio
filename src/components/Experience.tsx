import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-blue-600 dark:border-blue-500"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full" />
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                  {exp.company}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {exp.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}