import { FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaYoutube, FaBluesky } from 'react-icons/fa6';
import { SiHuggingface } from "react-icons/si";
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/EchoSingh',
    icon: FaGithub,
    color: 'text-purple-400',
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co/adi2606',
    icon: SiHuggingface,
    color: 'text-blue-400',
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/adi-r.bsky.social',
    icon: FaBluesky,
    color: 'text-blue-400',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adityasinghgdev/',
    icon: FaLinkedin,
    color: 'text-indigo-400',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/1305957634700083212',
    icon: FaDiscord,
    color: 'text-cyan-400',
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@adi.s.r',
    icon: FaYoutube,
    color: 'text-indigo-400',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/a_d_i_s_r',
    icon: FaTwitter,
    color: 'text-blue-400',
  }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ name, url, icon: Icon, color }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color} hover:scale-110 transition-transform`}
          aria-label={name}
        >
          <Icon className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
}
