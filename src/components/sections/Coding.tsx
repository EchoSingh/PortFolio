import { Code, Github, ExternalLink, Star, GitBranch } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Coding() {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-navy-700';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-navy-500';
  const highlightColor = theme === 'dark' ? 'text-cyan-400' : 'text-navy-800';
  const cardBg = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const hoverCardBg = theme === 'dark' ? 'hover:bg-gray-750' : 'hover:bg-gray-50';

  const codingStats = {
    leetcodeProblems: '65+',
    hackerRankGold: 'Gold',
    contestRating: '1,716',
    languages: '6',
  };

 const programmingLanguages = [
  { name: 'C++', proficiency: 90, projects: 23 },
  { name: 'jupyter notebook', proficiency: 80, projects: 18 },
  { name: 'Python', proficiency: 85, projects: 8 },
  { name: 'C', proficiency: 90, projects: 6 },
  { name: 'Java', proficiency: 75, projects: 4 },
  { name: 'Tex', proficiency: 85, projects: 1 }
];

  const codingPlatforms = [
    {
      name: 'GitHub',
      profile: 'https://github.com/EchoSingh',
      stats: 'Public repositories, contributions, and open source projects',
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: 'LeetCode',
      profile: 'https://leetcode.com/u/rayo_n/',
      stats: '65+ problems solved, Contest Rating: 1,716, Global Ranking: 85,811/742,807',
      icon: <Code className="w-6 h-6 text-orange-500" />,
    },
    {
      name: 'HackerRank',
      profile: 'https://www.hackerrank.com/profile/rayo_n',
      stats: 'Gold level in Problem Solving (876 points) and C++ (285 points)',
      icon: <Star className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section id="coding" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${highlightColor}`}>
            💻 Coding & Development
          </h2>
          <p className={`text-lg ${subTextColor} max-w-2xl mx-auto`}>
            Passionate about writing clean, efficient code and contributing to open source projects
          </p>
        </div>

        {/* Coding Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {codingStats.leetcodeProblems}
            </div>
            <div className={textColor}>LeetCode Problems</div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {codingStats.hackerRankGold}
            </div>
            <div className={textColor}>HackerRank Level</div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {codingStats.contestRating}
            </div>
            <div className={textColor}>Contest Rating</div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {codingStats.languages}
            </div>
            <div className={textColor}>Languages</div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className={`text-2xl font-bold mb-6 ${highlightColor}`}>
            Programming Languages & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programmingLanguages.map((lang) => (
              <div
                key={lang.name}
                className={`${cardBg} rounded-lg p-6 border`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className={`font-semibold ${textColor}`}>{lang.name}</h4>
                  <span className={`text-sm ${subTextColor}`}>
                    {lang.projects} projects
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-sm ${subTextColor}`}>Proficiency</span>
                    <span className={`text-sm font-medium ${textColor}`}>
                      {lang.proficiency}%
                    </span>
                  </div>
                  <div className={`w-full bg-gray-200 rounded-full h-2 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Platforms */}
        <div>
          <h3 className={`text-2xl font-bold mb-6 ${highlightColor}`}>
            Coding Platforms & Profiles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {codingPlatforms.map((platform) => (
              <div
                key={platform.name}
                className={`${cardBg} ${hoverCardBg} rounded-lg p-6 border transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {platform.icon}
                  <h4 className={`font-semibold text-lg ${textColor}`}>
                    {platform.name}
                  </h4>
                </div>

                <p className={`${subTextColor} text-sm mb-4`}>
                  {platform.stats}
                </p>

                {platform.profile && platform.profile !== '#' && (
                  <a
                    href={platform.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-medium transition-colors ${
                      theme === 'dark'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-cyan-600 hover:text-cyan-700'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Profile
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="mt-12 text-center">
          <div className={`${cardBg} rounded-lg p-8 border`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <GitBranch className={`w-6 h-6 ${highlightColor}`} />
              <h3 className={`text-xl font-bold ${highlightColor}`}>
                GitHub Activity
              </h3>
            </div>
            <p className={`${textColor} mb-6`}>
              Actively contributing to open source projects and building innovative solutions
            </p>
            <a
              href="https://github.com/EchoSingh"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900'
                  : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
              }`}
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
