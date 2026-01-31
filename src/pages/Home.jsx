import profilePic from '../assets/IMG_6103.jpg';
import resume from '../assets/Anish_s_Resume.pdf';
import { FaLinkedin, FaGithub, FaEnvelope, FaLightbulb, FaHandshake, FaComments, FaPuzzlePiece, FaJava, FaUsers, FaClock, FaChartLine, FaRocket } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiTailwindcss, SiMysql, SiGit, SiCplusplus, SiNodedotjs, SiMongodb, SiTerraform, SiPandas } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-32 text-center px-6 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profilePic}
            alt="Anish Ahuja"
            className="w-60 h-60 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white dark:border-gray-700"
          />
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Anish Ahuja</span>!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            BSc - Computer Science @ TMU
            <br />
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              <TypeAnimation
                sequence={[
                  'AI/ML',
                  2000,
                  'Data Analytics',
                  2000,
                  'Software Engineering',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://linkedin.com/in/anish-ahuja" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-3xl transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Anish07" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-white text-3xl transition">
              <FaGithub />
            </a>
            <a href="mailto:anishahuja46@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-500 text-3xl transition">
              <FaEnvelope />
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              View My Work
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-300 border border-blue-600 dark:border-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-600 transition duration-300 shadow-md"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* Technical Skills Section */}
      <section className="bg-white dark:bg-gray-900 py-20 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={<SiPython className="text-4xl text-blue-500" />}
              title="Python"
              desc="Data Analytics at OPG & AI Projects"
              delay={0}
            />
            <SkillCard
              icon={<FaJava className="text-4xl text-red-500" />}
              title="Java"
              desc="Retail Banking Database Management System with Oracle SQL"
              delay={0.1}
            />
            <SkillCard
              icon={<SiCplusplus className="text-4xl text-blue-700" />}
              title="C/C++"
              desc="System Utilities & Pathfinding Visualizer"
              delay={0.2}
            />
            <SkillCard
              icon={<SiJavascript className="text-4xl text-yellow-400" />}
              title="JavaScript"
              desc="Full-Stack Web Apps (YelpCamp, ArtX Platform, SmartResume Analyzer)"
              delay={0.3}
            />
            <SkillCard
              icon={<SiReact className="text-4xl text-cyan-400" />}
              title="React"
              desc="Modern UI/UX for Portfolio"
              delay={0.4}
            />
            <SkillCard
              icon={<SiNodedotjs className="text-4xl text-green-600" />}
              title="Node.js"
              desc="Backend Services & REST APIs"
              delay={0.5}
            />
            <SkillCard
              icon={<SiTerraform className="text-4xl text-purple-600" />}
              title="Terraform"
              desc="Infrastructure as Code (IaC)"
              delay={0.6}
            />
            <SkillCard
              icon={<SiPandas className="text-4xl text-indigo-600" />}
              title="Pandas/Matplotlib"
              desc="Data Visualization & Analysis"
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Soft Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={<FaLightbulb className="text-4xl text-yellow-500" />}
              title="Innovation"
              desc="Participant of OPG Innovation Pitch 2024 where I pitched an idea to improve continuous training for field workers"
              delay={0}
            />
            <SkillCard
              icon={<FaPuzzlePiece className="text-4xl text-green-500" />}
              title="Problem Solving"
              desc="Awarded RCMP Challenge Coin for innovative solutions that suppport national policing applications"
              delay={0.1}
            />
            <SkillCard
              icon={<FaComments className="text-4xl text-blue-400" />}
              title="Communication"
              desc="Presenting technical insights to stakeholders and PM's to improve efficiency and reduce costs"
              delay={0.2}
            />
            <SkillCard
              icon={<FaHandshake className="text-4xl text-orange-500" />}
              title="Collaboration"
              desc="Thriving in Agile Co-op environments where I worked with cross-functional teams to deliver high-quality software"
              delay={0.3}
            />
            <SkillCard
              icon={<FaUsers className="text-4xl text-purple-500" />}
              title="Leadership"
              desc="Leading projects and mentoring team members at OPG to support turnover and knowledge transfer"
              delay={0.4}
            />
            <SkillCard
              icon={<FaRocket className="text-4xl text-red-500" />}
              title="Adaptability"
              desc="Quickly learning new technologies across various Co-op placements by leveraging my strong foundation in computer science."
              delay={0.5}
            />
            <SkillCard
              icon={<FaChartLine className="text-4xl text-teal-500" />}
              title="Analytical Thinking"
              desc="Data-driven decision making and providing Power BI based actional insights at OPG to assist in decision making"
              delay={0.6}
            />
            <SkillCard
              icon={<FaClock className="text-4xl text-indigo-500" />}
              title="Time Management"
              desc="Balancing multiple projects and academic commitments by leveraging my strong time management skills."
              delay={0.7}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center border border-gray-100 dark:border-gray-600"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </motion.div>
  );
}