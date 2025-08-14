'use client';

import styles from '../styles/portfolio.module.css';
import aboutStyles from '../styles/about.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  const [intro, setIntro] = useState('');

  const text = "I'm Sristi Mitra, a tech enthusiast with a strong passion for cybersecurity, software development, and creative problem-solving. I love exploring how systems work, writing clean and secure code, and transforming ideas into impactful digital experiences. Whether it's building cross-platform apps or securing sensitive data, my curiosity and drive help me grow every day.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setIntro(prev => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`${styles.cyberBg} ${aboutStyles.page}`}>
      <div className={aboutStyles.circuitLines}></div>
<section className={aboutStyles.heroSection}>
 <TypeAnimation
  sequence={['W', 200, 'Wh', 200, 'Who', 200, 'Who ', 200, 'Who A', 200, 'Who Am', 200, 'Who Am I?', 1000]}
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


      <div className={aboutStyles.terminalBox}>
        <p className={aboutStyles.typedText}>{intro}</p>
      </div>

      {/* SECTIONS */}
      <div className={aboutStyles.sections}>
        <section className={aboutStyles.section}>
          <h3>🔍 What I Do</h3>
          <p>
            I work across full-stack development and cybersecurity. From building responsive UIs with React Native to developing secure backend systems with Java and SQL, I enjoy solving real-world challenges using technology.
          </p>
        </section>

        <section className={aboutStyles.section}>
          <h3>💡 Core Values</h3>
          <ul>
            <li>💻 Build with purpose and precision</li>
            <li>🔐 Security isn’t optional, it’s essential</li>
            <li>📚 Never stop learning</li>
          </ul>
        </section>

        <section className={aboutStyles.section}>
          <h3>🎯 My Mission</h3>
          <p>
            To create secure, scalable, and intuitive software solutions that improve lives while staying ahead of digital threats.
          </p>
        </section>

        {/* Resume and Back */}
        <section className={aboutStyles.resume}>
          <a href="/resume.pdf" target="_blank" className={aboutStyles.downloadBtn}>⬇ Download Resume</a>
          <Link href="/" className={aboutStyles.backBtn}>← Back to Home</Link>
        </section>
      </div>
    </main>
  );
}
