import { Book, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-navy-700';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-navy-500';
  const highlightColor = theme === 'dark' ? 'text-cyan-400' : 'text-navy-800';

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-extrabold mb-10 ${highlightColor}`}>
          Academic Foundations
        </h2>

        <div className="space-y-10">

          {/* College Section */}
          <div className="flex items-start space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdBPgfN6Jt6vUYHHdLgI5zOJWd_uvWH6fAA&s"
              alt="Dayananda Sagar College Logo"
              className="w-10 h-10 mt-1 rounded-full shadow-md"
            />
            <div>
              <h3 className={`text-2xl font-semibold mb-1 ${textColor}`}>College</h3>
              <p className={textColor}>Dayananda Sagar College of Engineering, Bengaluru</p>
              <p className={subTextColor}>Bachelor of Engineering in Information Science (VTU)</p>
              <p className={subTextColor}>CGPA: 9.30</p>
              <p className={subTextColor}>Nov 2022 – Jun 2026</p>
              <p className={`${subTextColor} mt-1`}>
                Skills: Python · C++ · Java
              </p>
            </div>
          </div>

          {/* Higher Secondary Section */}
          <div className="flex items-start space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXl0rjRem2lv1UnKQXuWmaSCsiefgymmMTIw&s"
              alt="Army Public School Logo"
              className="w-10 h-10 mt-1 rounded-full shadow-md"
            />
            <div>
              <h3 className={`text-2xl font-semibold mb-1 ${textColor}`}>Higher Secondary Education</h3>
              <p className={textColor}>Army Public School (APS)</p>
              <p className={subTextColor}>Higher Secondary Certificate (HSC), Physics, Chemistry, Mathematics</p>
              <p className={subTextColor}>Grade: 96.4%</p>
              <p className={subTextColor}>Mar 2020 – Jul 2021</p>
              <p className={`${subTextColor} mt-1`}>
                Skills: Python
              </p>
            </div>
          </div>

          {/* Secondary School Section */}
          <div className="flex items-start space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXl0rjRem2lv1UnKQXuWmaSCsiefgymmMTIw&s"
              alt="Army Public School Logo"
              className="w-10 h-10 mt-1 rounded-full shadow-md"
            />
            <div>
              <h3 className={`text-2xl font-semibold mb-1 ${textColor}`}>Secondary Education</h3>
              <p className={textColor}>Army Public School (APS)</p>
              <p className={subTextColor}>Secondary School Certificate (CBSE)</p>
              <p className={subTextColor}>Grade: 90.6%</p>
              <p className={subTextColor}>Feb 2018 – Mar 2019</p>
              <p className={`${subTextColor} mt-1`}>
                Activities: NCC Cadet <br />
                Skills: Visual Basic · Turbo C++ · C++
              </p>
            </div>
          </div>

          {/* Language Section */}
          <div className="flex items-start space-x-4">
            <Globe className={`w-6 h-6 mt-1 ${highlightColor}`} />
            <div>
              <h3 className={`text-2xl font-semibold mb-1 ${textColor}`}>Linguistic Fluency</h3>
              <p className={textColor}>English, Hindi</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
