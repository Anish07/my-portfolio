export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Anish Ahuja. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/Anish07" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/anish-ahuja" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="mailto:anishahuja46@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}