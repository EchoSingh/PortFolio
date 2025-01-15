import { Book, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 ${
          theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'
        }`}>
          About Me
        </h2>

        <div className="space-y-8">
          {/* College Section */}
          <div className="flex items-start space-x-4">
            <Book className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-purple-400' : 'text-navy-500'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
              }`}>
                College
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                Dayananda Sagar College Of Engineering
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}>
                B.E in Information Science (VTU)
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-400'}>
                SGPA: 9.5
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-400'}>
                Bengaluru, India | 2022–2026
              </p>
            </div>
          </div>

          {/* School Section */}
          <div className="flex items-start space-x-4">
            <Book className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-purple-400' : 'text-navy-500'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
              }`}>
                School
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                Army Public School Bhopal
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}>
                CBSE- Higher Secondary School
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-400'}>
                Percentage: 96.4%
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-400'}>
                Bhopal, India | 2020–2021
              </p>

              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                Army Public School Bhopal
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-600'}>
                CBSE- Secondary School
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-400'}>
                Percentage: 90.6%
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-navy-400'}>
                Bhopal, India | 2018–2019
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Globe className={`w-6 h-6 mt-1 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-navy-500'
            }`} />
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-navy-800'
              }`}>
                Languages
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                English
              </p>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-navy-700'}>
                Hindi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
