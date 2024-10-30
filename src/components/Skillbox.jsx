import React from "react";
import { motion } from "framer-motion";

const SkillBox = () => {
  const skills = [
    { name: "HTML5", icon: "html.png" },
    { name: "CSS3", icon: "css.png" },
    { name: "Tailwind", icon: "tailwind.png"},
    { name: "JavaScript", icon: "javascript.png" },
    { name: "ReactJS", icon: "reactjs.png" },
    { name: "NodeJS", icon: "nodejs.png" },
    
    { name: "MongoDB", icon: "mongodb.png" },
    { name: "MySQL", icon: "mysql.png" },
    { name: "git", icon: "git.png" },
    { name: "Python", icon: "python.webp"},
   
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
                src={`/src/assets/tech/${skill.icon}`} 
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