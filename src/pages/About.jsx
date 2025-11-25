import img1 from '../assets/AboutMe/IMG_4964_Original.jpeg';
import img2 from '../assets/AboutMe/IMG_6225.PNG';
import img3 from '../assets/AboutMe/IMG_6263.jpeg';
import img4 from '../assets/AboutMe/IMG_8993.jpeg';
import img5 from '../assets/AboutMe/work_screenshot.png';
import img6 from '../assets/AboutMe/IMG_8827.jpeg';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">About Me</h2>

          <div className="max-w-6xl mx-auto space-y-8 mb-12">
            {/* Education */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                🎓 Education
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a Computer Science Student at Toronto Metropolitan University (Class of June 2026) with a strong
                interest in AI/ML, Data Analytics, and Software Engineering. I've also Minored in Mathematics and
                Cybersecurity, and completed a Concentration in Software Engineering.
              </p>
            </div>

            {/* Work Experience */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                💼 Work Experience
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I've completed Co-Op Work Terms at the{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Royal Canadian Mounted Police</span> and{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Ontario Power Generation</span>, where I built
                tools that improve workflows and provide insights. These experiences have strengthened my technical skills
                and given me valuable real-world experience in software development and data analytics.
              </p>
            </div>

            {/* Hobbies */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                🎯 Hobbies & Interests
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Outside of school and work, I enjoy playing pool, reading, and walking my dog. These activities help me
                stay balanced and bring fresh perspectives to my technical work.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GalleryItem
            img={img1}
            alt="RCMP Challenge Coin"
            caption="RCMP Challenge Coin Summer 2023"
          />
          <GalleryItem
            img={img2}
            alt="Flight Simulation"
            caption="Flight Simulator at OPG"
          />
          <GalleryItem
            img={img3}
            alt="OPG Co-op Team"
            caption="OPG Winter 2025 Internship Team"
          />
          <GalleryItem
            img={img4}
            alt="Billiards"
            caption="Billiards"
          />
          <GalleryItem
            img={img5}
            alt="Innovation Pitch Award"
            caption="Innovation Pitch Award"
            className="md:col-span-2 lg:col-span-1"
          />
          <GalleryItem
            img={img6}
            alt="Trying out the Apple Vision Pro"
            caption="Trying out the Apple Vision Pro"
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ img, alt, caption, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-lg h-64 ${className}`}
    >
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-white font-semibold">{caption}</p>
      </div>
    </div>
  );
}