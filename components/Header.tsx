import React, { useState } from 'react';
import { LogoIcon } from './icons/LogoIcon';

interface HeaderProps {
    onNavigateToLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Program', href: '#program' },
    { name: 'E-Learning', href: '#elearning' },
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Komunitas', href: '#komunitas' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <LogoIcon className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold font-cairo text-gray-800">
                Pesantren Go Digital
              </span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onNavigateToLogin}
              className="font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-300"
            >
              Login
            </button>
            <a
              href="#"
              className="inline-block bg-emerald-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-md"
            >
              Daftar Sekarang
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-300 px-2 py-1"
                >
                  {link.name}
                </a>
              ))}
               <button
                  onClick={() => { onNavigateToLogin(); setIsMenuOpen(false); }}
                  className="font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-300 text-left px-2 py-1"
                >
                  Login
                </button>
              <a
                href="#"
                className="bg-emerald-600 text-white font-semibold text-center py-2 px-5 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
              >
                Daftar Sekarang
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;