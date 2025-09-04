'use client';

import styles from '../styles/portfolio.module.css';
import aboutStyles from '../styles/about.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  const [intro, setIntro] = useState('');

  // ✅ Add styled "Sristi Mitra" and keep two paragraphs
const text = 
  "I’m <span style='font-size:1.2em; font-weight:bold;'>Sristi Mitra</span>, a passionate Software Engineer with expertise in cybersecurity and software development. I specialize in creating scalable, real-world applications.\n\n" +
  " Beyond coding, I’m inspired by traveling and discovering new experiences, which fuel my curiosity and encourage me to keep exploring, learning, growing, and approaching challenges with fresh perspectives.";

 useEffect(() => {
  let index = 0;
  const interval = setInterval(() => {
    if (index <= text.length) {
      setIntro(text.slice(0, index));
      index++;
    } else {
      clearInterval(interval);
    }
  }, 40);

  return () => clearInterval(interval);
}, []);


  return (
    <main className={`${styles.cyberBg} ${aboutStyles.page}`}>
      <div className={aboutStyles.circuitLines}></div>

      {/* Hero Section */}
      <section className={aboutStyles.heroSection}>
        <TypeAnimation
          sequence={[
            'W', 200, 'Wh', 200, 'Who', 200, 'Who ', 200,
            'Who A', 200, 'Who Am', 200, 'Who Am I?', 1000
          ]}
          wrapper="span"
          speed={50}
          className={aboutStyles.sectionTitle}
          repeat={Infinity}
        />

        <div className={aboutStyles.hero}>
          <div className={aboutStyles.avatarWrapper}>
            <Image
              src="/assets/profilepic.png"
              width={200}
              height={200}
              alt="Avatar"
              className={aboutStyles.avatar}
            />
          </div>
        </div>
      </section>

      {/* Typed Intro Box */}
      <div className={aboutStyles.terminalBox}>
        <p className={aboutStyles.typedText}>
          {intro.split("\n").map((line, i) => (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </p>
      </div>

      {/* Sections */}
      <div className={aboutStyles.sections}>
        <section className={aboutStyles.section}>
          <h3>🔍 What I Do</h3>
          <p>
            I work across full-stack development and cybersecurity building responsive UIs with React Native to developing secure backend systems with Java and SQL.
          </p>
        </section>

        <section className={aboutStyles.section}>
          <h3>💡 Core Values</h3>
          <ul>
            <li>🌟 Integrity & Precision — building with honesty, purpose, and excellence</li>
            <li>🔐 Security & Trust — safeguarding people, data, and ideas</li>
            <li>🌱 Growth Mindset — embracing continuous learning in life and tech</li>
            <li>🤝 Compassion & Collaboration — valuing empathy, respect, and teamwork</li>
            <li>🌍 Impact & Innovation — creating solutions that improve lives and society</li>
          </ul>
        </section>

        <section className={aboutStyles.section}>
          <h3>🎯 My Mission</h3>
          <p>
            “My mission is to design secure, scalable, and impactful software that solves real challenges while embracing a balanced life of integrity, compassion, and growth—aligning innovation with stability to create lasting value for people, communities, and society.”
          </p>
        </section>

        {/* Resume and Back */}
        <section className={aboutStyles.resume}>
          <a
            href="/cer/portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={aboutStyles.downloadBtn}
          >
            ⬇ Download Resume
          </a>

          <Link href="/" className={aboutStyles.backBtn}>← Back to Home</Link>
        </section>
      </div>
    </main>
  );
}
