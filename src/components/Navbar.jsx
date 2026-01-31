import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Anish Ahuja</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About Me</Link>
          <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Products</Link>
          <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact Me</Link>
          <a href="/Anish.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Resume</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-gray-700 dark:text-gray-300">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-6 py-4 flex flex-col space-y-4 shadow-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About Me</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Products</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact Me</Link>
          <a href="/Anish.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Resume</a>
        </div>
      )}
    </nav>
  );
}