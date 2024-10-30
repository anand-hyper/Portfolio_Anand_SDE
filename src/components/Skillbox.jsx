import React from "react";
import { motion } from "framer-motion";

// Import all images
import htmlImg from "../assets/tech/html.png";
import cssImg from "../assets/tech/css.png";
import tailwindImg from "../assets/tech/tailwind.png";
import javascriptImg from "../assets/tech/javascript.png";
import reactjsImg from "../assets/tech/reactjs.png";
import nodejsImg from "../assets/tech/nodejs.png";
import mongoImg from "../assets/tech/mongodb.png";
import mysqlImg from "../assets/tech/mysql.png";
import gitImg from "../assets/tech/git.png";
import pyImg from "../assets/tech/python.webp";

///src/assets/tech/${skill.icon}`

const SkillBox = () => {
  const skills = [
    { name: "HTML5", icon: htmlImg },
    { name: "CSS3", icon: cssImg },
    { name: "Tailwind", icon: tailwindImg },
    { name: "JavaScript", icon: javascriptImg },
    { name: "ReactJS", icon: reactjsImg },
    { name: "NodeJS", icon: nodejsImg },
    { name: "MongoDB", icon: mongoImg },
    { name: "MySql", icon: mysqlImg },
    { name: "Git", icon: gitImg },
    { name: "Python", icon: pyImg }
  ];

  return (
    <div className="mt-10 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-tertiary rounded-xl p-4 hover:bg-electric-purple/20 transition-all duration-300 flex flex-col items-center group"
          >
            <div className="w-16 h-16 mb-2 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-white text-sm font-medium text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;