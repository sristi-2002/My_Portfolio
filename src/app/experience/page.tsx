"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const letters = ["E", "x", "p", "e", "r", "i", "e", "n", "c", "e", "?"];

const experiences = [
  {
    date: "Mar 2025 – Present",
    role: "React Native App Developer",
    company: "Gignets (Part of Kalkey Inc)",
    type: "Full-time",
    points: [
      "Designed and developed mobile applications using React Native, delivering high-performance features for both Android and iOS.",
      "Integrated REST APIs, optimized application performance, and robust solutions designed to enhance user experience.",
    ],
  },
  {
    date: "Jan 2024 – Feb 2025",
    role: "Assistant Engineer – Software Development",
    company: "Intellifyworx",
    type: "Internship & Full-time",
    points: [
      "Jan 2024 – Oct 2024 – Contributed to web solutions and learning core development workflows and UI/UX principles.",
      "Nov 2024 – Feb 2025 – Led feature design, development and optimized high-quality, scalable web solutions.",
    ],
  },
];

export default function Experience() {
  const [showWord, setShowWord] = useState(true);
  const [showYes, setShowYes] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowYes(true);
    }, letters.length * 150 + 1000); // Wait until letters finish + 1s pause
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#001414] text-white p-6">
      {!showTimeline && (
        <>
          {/* Neon glowing circle */}
          <motion.div
            className="w-80 h-80 rounded-full bg-[#00ffee] shadow-[0_0_100px_30px_#00ffee] flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <div className="flex">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`font-bold ${
                    index === 0 ? "text-6xl" : "text-3xl"
                  } text-black`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.3 }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* YES Button */}
          {showYes && showWord && (
            <motion.button
              className="mt-6 px-6 py-2 bg-[#00ffee] text-black font-semibold rounded-full shadow-[0_0_30px_#00ffee]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowWord(false);
                setShowYes(false);
                setTimeout(() => setShowTimeline(true), 500);
              }}
            >
              YES
            </motion.button>
          )}
        </>
      )}

      {/* EXPERIENCE TIMELINE */}
      {showTimeline && (
        <div className="mt-8 max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-5 border-l-4 border-[#00ffee] bg-[#002020] rounded-md shadow-[0_0_20px_#00ffee]"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.6, duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-[#00ffee]">{exp.role}</h2>
                <span className="text-sm text-gray-300">{exp.type}</span>
              </div>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="text-xs text-gray-500 mb-3">{exp.date}</p>

              {/* Bullet Points Animation */}
              <ul className="list-disc ml-5 text-sm space-y-1">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.6 + i * 0.3, // Stagger inside each card
                      duration: 0.4,
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
