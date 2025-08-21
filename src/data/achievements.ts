export interface Achievement {
  id: string;
  platform: string;
  title: string;
  description: string;
  date: string;
  link?: string;
  badge?: string;
  category: 'competitive-programming' | 'kaggle' | 'other';
}

export const achievements: Achievement[] = [
  // Kaggle Achievements
  {
    id: "kaggle-1",
    platform: "Kaggle",
    title: "Datasets Legacy Expert",
    description: "Ranked 589 out of 9,062 contributors with 1 bronze medal in datasets (Highest: 588)",
    date: "2024-2025",
    link: "https://www.kaggle.com/adi2606",
    badge: "https://img.icons8.com/?size=100&id=111400&format=png&color=000000",
    category: "kaggle",
  },
  {
    id: "kaggle-2",
    platform: "Kaggle",
    title: "Notebooks Expert",
    description: "Ranked 1,656 out of 52,189 with 6 medals in notebooks (Highest: 1,318)",
    date: "2024-2025",
    link: "https://www.kaggle.com/adi2606",
    badge: "https://img.icons8.com/?size=100&id=J0SgMWzAxqFj&format=png&color=000000",
    category: "kaggle",
  },
  {
    id: "kaggle-3",
    platform: "Kaggle",
    title: "Discussions Legacy Expert",
    description: "Active contributor in Kaggle discussions community",
    date: "2024-2025",
    link: "https://www.kaggle.com/certification/badges/adi2606/97",
    badge: "https://img.icons8.com/?size=100&id=21142&format=png&color=000000",
    category: "kaggle",
  },

  // Competitive Programming Achievements
  {
    id: "cp-1",
    platform: "LeetCode",
    title: "Problem Solver",
    description:
      "Solved 65+ problems with 75.7% acceptance rate. Contest Rating: 1,716, Global Ranking: 85,811/742,807",
    date: "2024-2025",
    link: "https://leetcode.com/u/rayo_n/",
    badge: "https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000",
    category: "competitive-programming",
  },
  {
    id: "cp-2",
    platform: "HackerRank",
    title: "Gold Level Achievement",
    description: "Problem Solving Gold level (876 points), C++ Gold level (285 points)",
    date: "2024-2025",
    link: "https://www.hackerrank.com/profile/rayo_n",
    badge: "https://img.icons8.com/?size=100&id=bcdiBt8pFXfZ&format=png&color=000000",
    category: "competitive-programming",
  },
];

export const achievementStats = {
  totalAchievements: achievements.length,
  kaggleRank: "Top 6% in Datasets",
  leetcodeProblems: "65+",
  competitiveProgrammingRating: "Gold Level",
  hackerRankGold: "Problem Solving in C++",
};
