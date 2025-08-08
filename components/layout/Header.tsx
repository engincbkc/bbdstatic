'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-500">
              BBD GARAGE
            </span>
            <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400 hidden sm:inline-block">
              Mechanic & MotorSport | EST. 2016
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Hakkımızda
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="/magaza"
              className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Mağaza
            </Link>
            <Link
              href="/iletisim"
              className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
            >
              İletişim
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-900 shadow-lg">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hakkimizda"
                className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/magaza"
                className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Mağaza
              </Link>
              <Link
                href="/iletisim"
                className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
