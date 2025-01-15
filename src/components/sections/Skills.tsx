import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-navy-50/50'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
        >
          Skills & Expertise
        </h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center">

          {/* C++ Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=cpp"
                alt="C++ Icon"
                width="24"
                height="24"
              />
              C++
            </h3>
            <p>Experienced in object-oriented programming,Data Structure & Algorithm , and performance optimization in C++.</p>
          </div>

          {/* Android Studio Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=androidstudio"
                alt="Android Studio Icon"
                width="24"
                height="24"
              />
              Android Studio
            </h3>
            <p>Developing mobile applications with Android SDK and Kotlin, following best practices for Android app development.</p>
          </div>

          {/* Java Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=java"
                alt="Java Icon"
                width="24"
                height="24"
              />
              Java
            </h3>
            <p>Experienced in object-oriented programming, Mobile Application development with Spring, and building scalable applications.</p>
          </div>

          {/* GitHub Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub Icon"
                width="24"
                height="24"
              />
              GitHub
            </h3>
            <p>Utilized GitHub for code versioning, collaboration, and hosting personal projects and open-source contributions.</p>
          </div>

          {/* MySQL Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=mysql"
                alt="MySQL Icon"
                width="24"
                height="24"
              />
              MySQL
            </h3>
            <p>Skilled in database design, writing optimized queries, and managing relational databases with MySQL.</p>
          </div>

          {/* Spring Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=spring"
                alt="Spring Icon"
                width="24"
                height="24"
              />
              Spring
            </h3>
            <p>Worked with the Spring framework to build scalable enterprise applications with Java and Spring Boot.</p>
          </div>

          {/* TensorFlow Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=tensorflow"
                alt="TensorFlow Icon"
                width="24"
                height="24"
              />
              TensorFlow
            </h3>
            <p>Built machine learning models using TensorFlow for various applications, including image recognition and data analysis.</p>
          </div>

          {/* OpenCV Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=opencv"
                alt="OpenCV Icon"
                width="24"
                height="24"
              />
              OpenCV
            </h3>
            <p>Used OpenCV for computer vision tasks, including image processing, object detection, and face recognition.</p>
          </div>

          {/* SDL2 Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sdl/sdl-plain.svg"
                alt="SDL2 Icon"
                width="24"
                height="24"
              />
              SDL2
            </h3>
            <p>Developed 2D games and multimedia applications using the SDL2 library, focusing on rendering and event handling.</p>
          </div>

          {/* Python Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://skillicons.dev/icons?i=python"
                alt="Python Icon"
                width="24"
                height="24"
              />
              Python
            </h3>
            <p>Proficient in Python programming for data analysis, web development, machine learning, and automation.</p>
          </div>

          {/* Jupyter Notebook Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"
                alt="Jupyter Notebook Icon"
                width="24"
                height="24"
              />
              Jupyter Notebook
            </h3>
            <p>Experienced in using Jupyter Notebook for interactive data exploration, visualization, and prototyping.</p>
          </div>

          {/* Hugging Face Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://huggingface.co/favicon.ico"
                alt="Hugging Face Icon"
                width="24"
                height="24"
              />
              Hugging Face
            </h3>
            <p>Skilled in utilizing Hugging Face's transformers library for natural language processing and model fine-tuning.</p>
          </div>

          {/* LaTeX Section */}
          <div
            className={`rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
              theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-navy-200 hover:border-navy-400 shadow-sm'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'}`}
            >
              <img
                className="inline-block mr-2"
                src="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg"
                alt="LaTeX Icon"
                width="24"
                height="24"
              />
              LaTeX
            </h3>
            <p>Expertise in creating technical documents, reports, and presentations using LaTeX.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
