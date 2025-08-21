import { Trophy, ExternalLink, Award, Code, Target } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { achievements, achievementStats } from '../../data/achievements';

export default function Achievements() {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-navy-700';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-navy-500';
  const highlightColor = theme === 'dark' ? 'text-cyan-400' : 'text-navy-800';
  const cardBg = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const hoverCardBg = theme === 'dark' ? 'hover:bg-gray-750' : 'hover:bg-gray-50';

  const kaggleAchievements = achievements.filter(a => a.category === 'kaggle');
  const cpAchievements = achievements.filter(a => a.category === 'competitive-programming');

  const renderPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'kaggle':
        return (
          <img
            src="https://img.icons8.com/?size=24&id=bMncK0wGFANA&format=png&color=000000"
            alt="Kaggle"
            className="w-6 h-6"
          />
        );
      case 'leetcode':
        return <Code className="w-6 h-6 text-orange-500" />;
      case 'hackerrank':
        return <Target className="w-6 h-6 text-green-500" />;
      default:
        return <Award className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${highlightColor}`}>
            🏆 Achievements & Recognition
          </h2>
          <p className={`text-lg ${subTextColor} max-w-2xl mx-auto`}>
            Recognition across competitive programming platforms and data science communities
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {achievementStats.kaggleRank}
            </div>
            <div className={textColor}>Kaggle Ranking</div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {achievementStats.leetcodeProblems}
            </div>
            <div className={textColor}>LeetCode Problems</div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {achievementStats.competitiveProgrammingRating}
            </div>
            <div className={textColor}>CP Rating</div>
          </div>
        </div>

        {/* Kaggle Achievements */}
        <div className="mb-12">
          <h3 className={`text-2xl font-bold mb-6 ${highlightColor} flex items-center gap-2`}>
            <img
              src="https://img.icons8.com/?size=32&id=bMncK0wGFANA&format=png&color=000000"
              alt="Kaggle"
              className="w-8 h-8"
            />
            Kaggle Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kaggleAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`${cardBg} ${hoverCardBg} rounded-lg p-6 border transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="flex items-start gap-3 mb-4">
                  {renderPlatformIcon(achievement.platform)}
                  <div className="flex-1">
                    <h4 className={`font-semibold ${textColor} mb-1`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${subTextColor} mb-2`}>
                      {achievement.platform} • {achievement.date}
                    </p>
                  </div>
                  {achievement.badge && (
                    <img src={achievement.badge} alt="badge" className="w-8 h-8" />
                  )}
                </div>

                <p className={`${textColor} text-sm mb-4`}>{achievement.description}</p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-sm transition-colors ${
                      theme === 'dark'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-cyan-600 hover:text-cyan-700'
                    }`}
                  >
                    View Achievement <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Programming Achievements */}
        <div>
          <h3 className={`text-2xl font-bold mb-6 ${highlightColor} flex items-center gap-2`}>
            <Code className="w-8 h-8" />
            Competitive Programming & LeetCode
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cpAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`${cardBg} ${hoverCardBg} rounded-lg p-6 border transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="flex items-start gap-3 mb-4">
                  {renderPlatformIcon(achievement.platform)}
                  <div className="flex-1">
                    <h4 className={`font-semibold ${textColor} mb-1`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${subTextColor} mb-2`}>
                      {achievement.platform} • {achievement.date}
                    </p>
                  </div>
                  {achievement.badge && (
                    <img src={achievement.badge} alt="badge" className="w-8 h-8" />
                  )}
                </div>

                <p className={`${textColor} text-sm mb-4`}>{achievement.description}</p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-sm transition-colors ${
                      theme === 'dark'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-cyan-600 hover:text-cyan-700'
                    }`}
                  >
                    View Profile <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
