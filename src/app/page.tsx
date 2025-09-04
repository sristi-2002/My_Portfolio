'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles/portfolio.module.css';

const FINAL_NAME = 'SRISTI MITRA';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < FINAL_NAME.length) {
      timeout = setTimeout(() => {
        setTypedText(prev => prev + FINAL_NAME[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // faster typing
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentIndex(0);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <main className={styles.cyberBg}>
      <div className={styles.lockWrapper}>
        {/* Animated Typing Text */}
        <span className={styles.typingText}>
          {typedText.split('').map((char, i) => {
            const isWordStart = i === 0 || typedText[i - 1] === ' ';
            return (
              <span
                key={i}
                className={isWordStart ? styles.bigLetter : styles.smallLetter}
              >
                {char}
              </span>
            );
          })}
        </span>

        {/* Rotating Connectors */}
        <div className={styles.outerConnector} style={{ transform: 'rotate(0deg)  translateY(-275px)', height: '95px' }}></div>
        <div className={styles.outerConnector} style={{ transform: 'rotate(60deg)  translateY(-290px)', height: '110px' }}></div>
        <div className={styles.outerConnector} style={{ transform: 'rotate(180deg)  translateY(-275px)', height: '95px' }}></div>
        <div className={styles.outerConnector} style={{ transform: 'rotate(240deg)  translateY(-300px)', height: '120px' }}></div>
        <div className={styles.outerConnector} style={{ transform: 'rotate(120deg) translateY(-290px)', height: '110px' }}></div>
        <div className={styles.outerConnector} style={{ transform: 'rotate(300deg) translateY(-300px)', height: '120px' }}></div>

        <div className={styles.connector}></div>

        {/* Labels with Links */}
        <div className={styles.labels}>
          <Link href="/about" className={styles.label} style={{ top: '-200px', left: '39%', transform: 'translateX(-50%)', animationDelay: '0s' }}>About</Link>
          <Link href="/education" className={styles.label} style={{ top: '-60px', left: 'calc(50% + 275px)', animationDelay: '0s' }}>Education</Link>
          <Link href="/project" className={styles.label} style={{ bottom: '-60px', left: 'calc(50% + 275px)', animationDelay: '0s' }}>Project</Link>
          <Link href="/experience" className={styles.label} style={{ bottom: '-200px', left: '32%', transform: 'translateX(-50%)', animationDelay: '0s' }}>Experience</Link>
          <Link href="/certificate" className={styles.label} style={{ bottom: '-60px', left: 'calc(50% - 380px)', animationDelay: '0s' }}>Certificate</Link>
          <Link href="/skills" className={styles.label} style={{ top: '-60px', left: 'calc(50% - 350px)', animationDelay: '0s' }}>Skills</Link>
        </div>
      </div>
    </main>
  );
}
