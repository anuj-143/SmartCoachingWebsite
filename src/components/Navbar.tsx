import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, LogIn, User, BookOpen, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-serif font-bold">SmartCoach</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>About Us</NavLink>
          <NavLink to="/courses" active={location.pathname.startsWith('/courses')}>Courses</NavLink>
          <NavLink to="/portfolio" active={location.pathname === '/portfolio'}>Portfolio</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
        </div>

        {/* Auth and Theme Controls */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {isAuthenticated ? (
            <div className="relative group">
              <button className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <span>{user?.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 w-48 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to={user?.role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard'}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20 px-6 md:hidden`}
      >
        <div className="flex flex-col space-y-6">
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMenu}>About Us</MobileNavLink>
          <MobileNavLink to="/courses" onClick={toggleMenu}>Courses</MobileNavLink>
          <MobileNavLink to="/portfolio" onClick={toggleMenu}>Portfolio</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>

          <div className="h-px bg-gray-200 dark:bg-gray-700 my-4"></div>

          {isAuthenticated ? (
            <>
              <MobileNavLink
                to={user?.role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard'}
                onClick={toggleMenu}
              >
                Dashboard
              </MobileNavLink>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="flex items-center space-x-2 py-2 text-red-600 dark:text-red-400"
              >
                <LogIn className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <MobileNavLink to="/login" onClick={toggleMenu}>
                <div className="flex items-center space-x-2">
                  <LogIn className="w-5 h-5" />
                  <span>Login</span>
                </div>
              </MobileNavLink>
              <MobileNavLink to="/signup" onClick={toggleMenu}>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Sign Up</span>
                </div>
              </MobileNavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

// Helper components
type NavLinkProps = {
  to: string;
  active?: boolean;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
      active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'
    }`}
  >
    {children}
  </Link>
);

type MobileNavLinkProps = {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-xl font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400"
  >
    {children}
  </Link>
);

export default Navbar;