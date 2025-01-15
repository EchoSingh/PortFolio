import React from 'react';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';
import { useTheme } from '../context/ThemeContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen font-mono transition-colors duration-300
      ${
        theme === 'dark'
          ? 'bg-gray-900 text-cyan-50'
          : 'bg-navy-50 text-navy-900'
      }`}
    >
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 text-center mt-10 py-4 text-sm">
        &copy; {new Date().getFullYear()} Aditya Singh. All rights reserved.
      </footer>
    </div>
  );
}
