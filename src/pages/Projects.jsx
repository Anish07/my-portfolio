import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';

const projects = [
  {
    title: "Retail Banking DBMS",
    desc: "Retail Banking Database Management System built using Oracle SQL and Java Swing UI.",
    tech: ["Java", "Oracle SQL", "Swing"],
    link: "https://github.com/Anish07/RetailBankingDBMS",
  },
  {
    title: "Pathfinding Visualizer",
    desc: "A C++ application to visualize pathfinding algorithms.",
    tech: ["C++", "Algorithms"],
    link: "https://github.com/Anish07/Pathfinding-Visualizer",
  },
  {
    title: "LeBot Discord Bot",
    desc: "A Discord bot built with Python.",
    tech: ["Python", "Discord.py"],
    link: "https://github.com/Anish07/LeBot",
  },
  {
    title: "Machine Learning Project",
    desc: "This project performs customer segmentation analysis on the Mall Customers dataset.",
    tech: ["Python", "Machine Learning"],
    link: "https://github.com/Anish07/Machine-Learning-Project",
  },
  {
    title: "Packet Sniffer",
    desc: "A network packet sniffer implementation in C.",
    tech: ["C", "Networking"],
    link: "https://github.com/Anish07/Packet-Sniffer",
  },
  {
    title: "CipherDecipher",
    desc: "A C++ program where the user input can be ciphered or deciphered based on the ASCII key.",
    tech: ["C++", "Algorithms"],
    link: "https://github.com/Anish07/CipherDecipher",
  },
  {
    title: "Terraform Demo",
    desc: "Infrastructure as Code demo using Terraform to automate cloud resource provisioning.",
    tech: ["Terraform", "IaC", "Cloud"],
    link: "https://github.com/Anish07/terraform-demo",
  },
  {
    title: "Thread Pool",
    desc: "A reusable thread pool library built with C++17 for concurrent task execution.",
    tech: ["C++", "Multithreading"],
    link: "https://github.com/Anish07/thread-pool",
  },
  {
    title: "Game Arena",
    desc: "Interactive gaming application built with Java Swing UI.",
    tech: ["Java", "Swing", "GUI"],
    link: "https://github.com/Anish07/GameArena",
  },
  {
    title: "Multithreaded File Manager",
    desc: "Parallelized file system scanner using C++17 with thread pool for recursive directory traversal.",
    tech: ["C++", "Multithreading", "Filesystem"],
    link: "https://github.com/Anish07/multithreaded-file-manager",
  },
  {
    title: "Monsters Rolodex",
    desc: "React application featuring dynamic search functionality and component-based architecture.",
    tech: ["React", "JavaScript", "API"],
    link: "https://github.com/Anish07/Monsters-Rolodex",
  },
  {
    title: "Crown Clothing",
    desc: "E-commerce clothing store built with React featuring modern UI/UX and state management.",
    tech: ["React", "JavaScript", "E-commerce"],
    link: "https://github.com/Anish07/crwn-clothing",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-24 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-600 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}