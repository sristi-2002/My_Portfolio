"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Certificate data (title + company + pdf link)
const certificates = [
  { title: "Coding Dev", company: "Accenture", pdf: "/cer/acc.pdf" },
  { title: "Software Dev", company: "JP Morgan", pdf: "/cer/jp.pdf" },
  { title: "Cyber Security", company: "TATA", pdf: "/cer/tata.pdf" },
];

// Letter animation (for C → e → r… effect)
const letterAnim = {
  hidden: { opacity: 0, y: 10, scale: 0.4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1.2,
    transition: { delay: i * 0.15, duration: 0.4 },
  }),
};

export default function Certificates() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#001414] text-white p-6">
      {/* Main Heading */}
      <motion.h2
        className="flex text-4xl font-bold text-[#00ffee] mb-12 tracking-widest" // ⬅ adds spacing
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              repeat: Infinity,
              repeatDelay: 2,
            },
          },
        }}
      >
        {"Certificates".split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnim}
            style={{ display: "inline-block", marginRight: "1.5px" }} // ⬅ extra gap
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Row of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="cursor-pointer p-6 border border-[#00ffee] bg-[#002020] rounded-xl shadow-[0_0_20px_#00ffee] text-center hover:scale-105 transition-transform relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6, type: "spring" }}
            onClick={() => window.open(cert.pdf, "_blank")}
          >
            {/* Animated Title */}
            <motion.h3
              className="flex justify-center text-lg font-semibold mb-2 tracking-wide"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    repeat: Infinity,
                    repeatDelay: 2,
                  },
                },
              }}
            >
              {cert.title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnim}
                  style={{ display: "inline-block", marginRight: "4px" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h3>

            {/* Animated Company */}
            <motion.p
              className="flex justify-center text-sm text-[#00ffee] font-bold mb-4 tracking-wide"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    repeat: Infinity,
                    repeatDelay: 2,
                  },
                },
              }}
            >
              {cert.company.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnim}
                  style={{ display: "inline-block", marginRight: "3px" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            {/* Check/Go Icon */}
            <motion.div
              className="flex justify-center mt-4"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <ArrowRight size={28} className="text-[#00ffee] rotate-320" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
