"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Theory",
    list: "Data Structure, Object-oriented Programming, Database Management System",
  },
  {
    category: "Programming",
    list: "Java, C, Python, SQL",
  },
  {
    category: "Databases",
    list: "MySQL, Oracle",
  },
  {
    category: "Dev",
    list: "HTML, CSS, JavaScript, TypeScript, React.js, React-Native, Next.js",
  },
];

export default function Skills() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#001414] text-white p-10 relative">
      {/* Vertical line in the middle */}
      <div className="absolute left-1/2 top-10 bottom-0 w-[4px] bg-[#00ffee]"></div>

      <div className="flex flex-col gap-16 w-full max-w-6xl mt-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex">
            {/* Left side blank */}
            <div className="w-1/2"></div>

            {/* Right side: dotted line + text */}
            <motion.div
              className="flex items-center w-1/2"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: index * 0.5, duration: 1.2, ease: "easeOut" }}
            >
              {/* Dotted line → always starts at vertical line */}
              <div className="h-[2px] flex-1 bg-[repeating-linear-gradient(to_right,#00ffee_0px,#00ffee_10px,transparent_10px,transparent_20px)] animate-[moveDots_2s_linear_infinite]"></div>

              {/* Skill Text */}
              <motion.div
                className="ml-6 shrink-0 text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.8 }}
              >
                <h3 className="text-xl font-bold text-[#00ffee]">
                  {skill.category}
                </h3>
                <p className="text-sm text-gray-300">{skill.list}</p>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* CSS Keyframes for dotted animation */}
      <style jsx>{`
        @keyframes moveDots {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 20px 0;
          }
        }
      `}</style>
    </div>
  );
}
