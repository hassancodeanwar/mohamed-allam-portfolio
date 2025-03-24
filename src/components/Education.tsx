import { educationData } from '../data/education';

export function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {educationData.school}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">
              {educationData.degree}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {educationData.period}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {educationData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}