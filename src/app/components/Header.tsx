import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';
import logoImg from '@/assets/kidtracker-logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/support', label: 'Support' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="border-b sticky top-0 z-50 shadow-lg" style={{ background: `linear-gradient(to right, var(--custom-primary), var(--custom-primary-dark))`, borderColor: 'var(--custom-primary-dark)' }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white rounded-lg p-1">
              <img src={logoImg} alt="KidTrackerApp Logo" className="h-10 w-auto" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-white">KidTrackerApp™</h1>
              <p className="text-xs" style={{ color: 'var(--custom-primary-extra-light)' }}>Powered by GDI Digital Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-white font-medium'
                    : 'hover:text-white'
                }`}
                style={!isActive(link.path) ? { color: 'var(--custom-primary-extra-light)' } : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://main.d2nbsjhv8lzch9.amplifyapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center ml-4"
              style={{ color: 'var(--custom-primary)' }}
            >
              <LogIn className="mr-1.5" size={16} />
              Login
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t" style={{ borderColor: 'var(--custom-primary-dark)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 ${
                  isActive(link.path)
                    ? 'text-white font-medium'
                    : ''
                }`}
                style={!isActive(link.path) ? { color: 'var(--custom-primary-extra-light)' } : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://main.d2nbsjhv8lzch9.amplifyapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center mt-4"
              style={{ color: 'var(--custom-primary)' }}
            >
              <LogIn className="mr-2" size={18} />
              Login
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}