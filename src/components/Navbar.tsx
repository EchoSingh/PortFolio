import React, { useState } from 'react';
import { Menu, X, Terminal, User, Briefcase, Shield, MessageSquare, Home, Award, Code, BookOpen, Trophy, Edit } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="group relative px-2 py-1 text-sm transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 h-[1px] w-0 bg-cyan-600 dark:bg-cyan-400 bottom-0 group-hover:w-full transition-all duration-300" />
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-sm border-b transition-colors duration-300
      ${theme === 'dark'
        ? 'bg-gray-900/80 border-cyan-900/50'
        : 'bg-white/80 border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400">
            <Terminal className="w-6 h-6" />
            <span className="font-bold">Aditya Singh</span>
          </a>

          <div className="hidden lg:flex items-center space-x-2">
            <NavLink href="#home"><Home className="w-3 h-3 inline mr-1" />Home</NavLink>
            <NavLink href="#about"><User className="w-3 h-3 inline mr-1" />About</NavLink>
            <NavLink href="#skills"><Shield className="w-3 h-3 inline mr-1" />Skills</NavLink>
            <NavLink href="#coding"><Code className="w-3 h-3 inline mr-1" />Code</NavLink>
            <NavLink href="#books"><BookOpen className="w-3 h-3 inline mr-1" />Books</NavLink>
            <NavLink href="#achievements"><Trophy className="w-3 h-3 inline mr-1" />Awards</NavLink>
            <NavLink href="#blogs"><Edit className="w-3 h-3 inline mr-1" />Blogs</NavLink>
            <NavLink href="#certifications"><Award className="w-3 h-3 inline mr-1" />Certs</NavLink>
            <NavLink href="#projects"><Briefcase className="w-3 h-3 inline mr-1" />Projects</NavLink>
            <NavLink href="#contact"><MessageSquare className="w-3 h-3 inline mr-1" />Contact</NavLink>
            <ThemeToggle />
          </div>

          {/* Compact menu for medium screens */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#coding">Code</NavLink>
            <NavLink href="#achievements">Awards</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <ThemeToggle />
          </div>

          <button
            className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-2 space-y-1">
            <a href="#home" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Home className="w-4 h-4 inline mr-2" /> Home
            </a>
            <a href="#about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <User className="w-4 h-4 inline mr-2" /> About
            </a>
            <a href="#skills" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Shield className="w-4 h-4 inline mr-2" /> Skills
            </a>
            <a href="#coding" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Code className="w-4 h-4 inline mr-2" /> Coding
            </a>
            <a href="#books" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <BookOpen className="w-4 h-4 inline mr-2" /> Books
            </a>
            <a href="#achievements" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Trophy className="w-4 h-4 inline mr-2" /> Achievements
            </a>
            <a href="#blogs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Edit className="w-4 h-4 inline mr-2" /> Blogs
            </a>
            <a href="#certifications" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Award className="w-4 h-4 inline mr-2" /> Certifications
            </a>
            <a href="#projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Briefcase className="w-4 h-4 inline mr-2" /> Projects
            </a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <MessageSquare className="w-4 h-4 inline mr-2" /> Contact
            </a>
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
