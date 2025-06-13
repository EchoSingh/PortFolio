import { Book, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const competitivePlatforms = [
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/adi2606",
    icon: "https://img.icons8.com/?size=100&id=bMncK0wGFANA&format=png&color=000000",
    badge: "Datasets, Notebooks & Discussions Expert",
    status: "Ongoing Contributor",
    contest: "Pinned: Face Aging using Conditional GAN, DeepFake-PRNU, News Summarizer",
    globalRank: "Rank Highlights:",
    details: `• Datasets Rank: 728 / 14,445 (Highest: 679)
• Notebooks Rank: 1,321 / 56,858
• Discussions Rank: 1,037 / 27,874 (Highest: 1,025)
• Medals: 6 (Datasets), 11 (Notebooks), 51 (Discussions)
Actively contributing machine learning solutions and curated data assets.`,
  },
  {
    name: "LeetCode",
    link: "https://www.leetcode.com/adi_s_r",
    icon: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000",
    rating: "Max Rating: 1759",
    globalRank: "Global Rank: 62,252",
    contestRank: "Secured Global Rank 511 in Weekly Contest 442",
    details: "Sharpening problem-solving skills across data structures and algorithms.",
  },
  {
    name: "CodeForces",
    link: "https://codeforces.com/profile/Zhu_Yun",
    icon: "https://img.icons8.com/?size=100&id=jldAN67IAsrW&format=png&color=000000",
    rating: "Rating: 1062",
    details: "Exploring complex algorithmic challenges in competitive programming.",
  }
];

export default function About() {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-navy-700';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-navy-500';
  const highlightColor = theme === 'dark' ? 'text-cyan-400' : 'text-navy-800';

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-extrabold mb-10 ${highlightColor}`}>
          Get to Know Me
        </h2>

        <div className="space-y-10">

          {/* College Section */}
          <div className="flex items-start space-x-4">
            <Book className={`w-6 h-6 mt-1 ${highlightColor}`} />
            <div>
              <h3 className={`text-2xl font-semibold mb-1 ${textColor}`}>Academic Background</h3>
              <p className={textColor}>Dayananda Sagar College of Engineering</p>
              <p className={subTextColor}>B.E in Information Science (VTU)</p>
              <p className={subTextColor}>SGPA: 9.5</p>
              <p className={subTextColor}>Bengaluru, India | 2022 – 2026</p>
            </div>
          </div>

          {/* Language Section */}
          <div className="flex items-start space-x-4">
            <Globe className={`w-6 h-6 mt-1 ${highlightColor}`} />
            <div>
              <h3 className={`text-2xl font-semibold mb-1 ${textColor}`}>Languages Spoken</h3>
              <p className={textColor}>English, Hindi</p>
            </div>
          </div>

          {/* Competitive Platforms */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${textColor}`}>Competitive Programming & AI Challenges</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {competitivePlatforms.map((platform, idx) => (
                <div key={idx} className={`rounded-xl border p-5 shadow-md transition hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center space-x-3">
                    <img src={platform.icon} alt={platform.name} className="w-7 h-7" />
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      {platform.name}
                    </a>
                  </div>
                  <div className={`mt-2 space-y-1 text-sm ${textColor}`}>
                    {platform.contest && <p><strong>Contest:</strong> {platform.contest}</p>}
                    {platform.globalRank && <p><strong>{platform.globalRank}</strong></p>}
                    {platform.rating && <p><strong>{platform.rating}</strong></p>}
                    {platform.contestRank && <p>{platform.contestRank}</p>}
                    {platform.badge && <p><em>{platform.badge}</em></p>}
                    {platform.status && <p className="italic text-sm">{platform.status}</p>}
                    {platform.details && <p className="whitespace-pre-line">{platform.details}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
