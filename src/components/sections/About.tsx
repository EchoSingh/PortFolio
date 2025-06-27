import { Book, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const kaggleProfile = {
  name: "Kaggle",
  link: "https://www.kaggle.com/adi2606",
  icon: "https://img.icons8.com/?size=100&id=bMncK0wGFANA&format=png&color=000000",
  badge: "Datasets, Notebooks & Discussions Expert",
  status: "Ongoing Contributor",
  contest: "Pinned Projects: Face Aging via Conditional GAN, DeepFake-PRNU Detector, News Article Summarizer",
  globalRank: "Performance Snapshot:",
  details: `• Datasets Rank: 728 / 14,445 (Peak: 679)
• Notebooks Rank: 1,321 / 56,858
• Discussions Rank: 1,037 / 27,874 (Peak: 1,025)
• Total Medals: 🥇6 (Datasets), 🥈11 (Notebooks), 🏅51 (Discussions)

Constantly pushing boundaries in AI through impactful projects, curated datasets, and meaningful community engagement.`,
};

export default function About() {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-navy-700';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-navy-500';
  const highlightColor = theme === 'dark' ? 'text-cyan-400' : 'text-navy-800';
  const cardBg = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-extrabold mb-10 ${highlightColor}`}>
          Meet the Mind Behind the Code
        </h2>

        <div className="space-y-10">

          {/* College Section */}
          <div className="flex items-start space-x-4">
            <Book className={`w-6 h-6 mt-1 ${highlightColor}`} />
            <div>
              <h3 className={`text-2xl font-semibold mb-1 ${textColor}`}>Academic Foundations</h3>
              <p className={textColor}>Dayananda Sagar College of Engineering</p>
              <p className={subTextColor}>Bachelor of Engineering in Information Science (VTU)</p>
              <p className={subTextColor}>CGPA: 9.29</p>
              <p className={subTextColor}>Bengaluru, India | 2022 – 2026</p>
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

          {/* Kaggle Section */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${textColor}`}>AI & Data Science Journey</h3>
            <div className={`rounded-xl border p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out ${cardBg}`}>
              <div className="flex items-center space-x-3 mb-3">
                <img src={kaggleProfile.icon} alt={kaggleProfile.name} className="w-8 h-8" />
                <a
                  href={kaggleProfile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-blue-600 hover:underline"
                >
                  {kaggleProfile.name}
                </a>
              </div>
              <div className={`space-y-2 text-sm ${textColor}`}>
                <p><strong>📌 {kaggleProfile.contest}</strong></p>
                <p><strong>{kaggleProfile.globalRank}</strong></p>
                <p><em>🏅 {kaggleProfile.badge}</em></p>
                <p className="italic">{kaggleProfile.status}</p>
                <p className="whitespace-pre-line">{kaggleProfile.details}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
