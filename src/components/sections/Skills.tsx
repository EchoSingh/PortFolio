import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();

  const skills = [
    {
      title: 'Languages',
      items: ['C', 'C++', 'Java', 'Python', 'SQL'],
      icons: ['c', 'cpp', 'java', 'python', 'mysql'],
    },
    {
      title: 'Developer Tools',
      items: ['Sublime', 'Eclipse', 'GitHub', 'Visual Studio'],
      icons: ['sublime', 'eclipse', 'github', 'vscode'],
    },
    {
      title: 'Technologies / Frameworks',
      items: ['Linux', 'Git', 'TensorFlow', 'PyTorch', 'scikit-learn', 'MongoDB'],
      icons: ['linux', 'git', 'tensorflow', 'pytorch', 'scikitlearn', 'mongodb'],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-navy-50/50'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, items, icons }, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
              >
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    {icons[i] && (
                      <img
                        src={`https://skillicons.dev/icons?i=${icons[i]}`}
                        alt={`${item} Icon`}
                        className="w-6 h-6"
                      />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
