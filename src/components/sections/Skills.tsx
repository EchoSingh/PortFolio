import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();

  const skills = [
    {
      title: 'Languages',
      items: ['C++', 'Python', 'Java', 'LaTeX', 'SQL'],
      icons: [
        'cpp',
        'python',
        'java',
        'https://img.icons8.com/?size=100&id=WBooq2dInw0x&format=png&color=000000', // LaTeX
        'mysql',
      ],
    },
    {
      title: 'Software',
      items: [
        'Large Language Models (LLMs)',
        'Hugging Face Transformers',
        'Dataset Curation',
        'CleanText',
        'Docling',
        'Android SDK',
        'wxWidgets',
        'Kaggle',
        'Google Colab',
        'Visual Studio Code',
        'JetBrains Fleet',
        'Eclipse',
      ],
      icons: [
        'https://imgs.search.brave.com/w1DaG_YIEoOnQ_lsy2PMbnFqpZOxar502Uvgry8r-Zw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzUyLzM2LzYx/LzM2MF9GXzE0NTIz/NjYxMDRfRDlUR2pN/Vno4QnlpYUxnZ04x/MTlKUFhBWURoVHRs/cUYuanBn', // LLM
        'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
        'https://img.icons8.com/?size=100&id=111400&format=png&color=000000', // Dataset
        'https://avatars.githubusercontent.com/u/3450307?s=48&v=4', // CleanText
        'https://avatars.githubusercontent.com/u/188446108?s=48&v=4', // Docling
        'androidstudio',
        'https://imgs.search.brave.com/F-FulRkEN2z6f8k8LdtZj3p-F_8f_zE1jJbH9F5S1WE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWVmMTgxZjBh/ZDM3Mjk3MDMyNGY4/NDNmYjNkMmZmMzA4/MGY1ZjhlY2NhMzY0/NDAzMzRkYzkzMDBj/Yzg1Mjk3NC93eHdp/ZGdldHMub3JnLw', // wxWidgets
        'https://img.icons8.com/?size=100&id=QrYhwpUzAcoy&format=png&color=000000',
        'https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000',
        'vscode',
        'https://logowik.com/content/uploads/images/jetbrains-fleet5092.logowik.com.webp', // Fleet
        'eclipse',
      ],
    },
  ];


  const getIconSrc = (icon) => {
    if (icon.startsWith('http')) {
      return icon; // external URL
    } else if (icon.startsWith('custom/')) {
      return `/custom-icons/${icon.split('/')[1]}`; // local custom file
    } else {
      return `https://skillicons.dev/icons?i=${icon}`; // skillicons.dev
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-navy-50/50'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'
          }`}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-navy-700'
                }`}
              >
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <img
                      src={getIconSrc(icons[i])}
                      alt={`${item} Icon`}
                      className="w-6 h-6"
                    />
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
