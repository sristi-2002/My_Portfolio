'use client';

import { JSX, useEffect, useState } from 'react';
import styles from '../styles/portfolio.module.css';
import eduStyles from '../styles/education.module.css';
import Link from 'next/link';

export default function Education() {
  const [showIntro, setShowIntro] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [textCycle, setTextCycle] = useState(0);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 2000);
    const timer1 = setTimeout(() => setShowFirst(true), 2000);
    const timer2 = setTimeout(() => setShowSecond(true), 3000);
    const timer3 = setTimeout(() => setShowThird(true), 4000);
    const timer4 = setTimeout(() => setShowFourth(true), 5000);

    const cycleInterval = setInterval(() => {
      setTextCycle((prev) => prev + 1);
    }, 10000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearInterval(cycleInterval);
    };
  }, []);

  const animateHeading = (text: string, startIndex = 0, delayStep = 0.03) =>
    text.split('').map((char, i) => {
      const isWordStart = i === 0 || text[i - 1] === ' ';
      return (
        <span
          key={`${textCycle}-h-${i}`}
          style={{ animationDelay: `${(startIndex + i) * delayStep}s` }}
          className={
            char === ' '
              ? eduStyles.spaceLetter
              : isWordStart
              ? eduStyles.bigLetter
              : eduStyles.smallLetter
          }
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });

  const animateText = (text: string, startIndex = 0, delayStep = 0.03) =>
    text.split('').map((char, i) => (
      <span
        key={`${textCycle}-t-${i}`}
        style={{ animationDelay: `${(startIndex + i) * delayStep}s` }}
        className={char === ' ' ? eduStyles.spaceLetter : eduStyles.letterAnimate}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  // ✅ Allow strings & JSX (for CGPA/Marks values)
  const AnimatedCardText = ({ lines }: { lines: (string | JSX.Element)[] }) => {
    let totalLength = 0;
    return (
      <>
        {lines.map((line, idx) => {
          if (typeof line === 'string') {
            const animatedLine = animateText(line, totalLength);
            totalLength += line.length;
            return <p key={`${textCycle}-line-${idx}`}>{animatedLine}</p>;
          }
          return <p key={`${textCycle}-line-${idx}`}>{line}</p>;
        })}
      </>
    );
  };

  return (
    <main className={`${styles.cyberBg} ${eduStyles.eduContainer}`}>
      {showIntro && (
        <div className={eduStyles.introBox}>
          <p className={eduStyles.introText}>
            {animateText('Do you want to know about my education?', 0.5, 0.02)}
          </p>
        </div>
      )}

      <div className={eduStyles.timeline}>
        {/* M.Tech */}
        {showFourth && (
          <div className={`${eduStyles.timelineItem} ${eduStyles.show}`}>
            <div className={eduStyles.centerRow}>
              <div className={`${eduStyles.card} ${eduStyles.cardAnimate}`}>
                <h3>{animateHeading('M.Tech in Computer Science')}</h3>
                <AnimatedCardText lines={['IIT Patna']} />
              </div>
              <div className={`${eduStyles.horizontalConnector} ${eduStyles.rightYear}`}>
                <div
                  key={`line-mtech-${textCycle}`}
                  className={`${eduStyles.line} ${eduStyles.animatedLine}`}
                />
                <div
                  key={`circle-mtech-${textCycle}`}
                  className={`${eduStyles.circle} ${eduStyles.animatedCircle}`}
                >
                  {animateText('2025++', 0, 0.1)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* B.E. */}
        {showThird && (
          <div className={`${eduStyles.timelineItem} ${eduStyles.show}`}>
            <div className={eduStyles.centerRow}>
              <div className={`${eduStyles.horizontalConnector} ${eduStyles.leftYear}`}>
                <div
                  key={`line-be-${textCycle}`}
                  className={`${eduStyles.line} ${eduStyles.animatedLine}`}
                />
                <div
                  key={`circle-be-${textCycle}`}
                  className={`${eduStyles.circle} ${eduStyles.animatedCircle}`}
                >
                  {animateText('2020–2024', 0, 0.1)}
                </div>
              </div>
              <div className={`${eduStyles.card} ${eduStyles.cardAnimate}`}>
                <h3>{animateHeading('B.E in Information Technology')}</h3>
                <AnimatedCardText
                  lines={[
                    'UIT BURDWAN',
                    <>
                      CGPA:{' '}
                      <span className={eduStyles.normalText}>9.16</span>
                    </>,
                  ]}
                />
              </div>
            </div>
          </div>
        )}

        {/* 12th */}
        {showSecond && (
          <div className={`${eduStyles.timelineItem} ${eduStyles.show}`}>
            <div className={eduStyles.centerRow}>
              <div className={`${eduStyles.card} ${eduStyles.cardAnimate}`}>
                <h3>{animateHeading('12th Standard – WBCHSE')}</h3>
                <AnimatedCardText
                  lines={[
                    'Gustia K.N High School',
                    <>
                      Marks:{' '}
                      <span className={eduStyles.normalText}>76.20%</span>
                    </>,
                  ]}
                />
              </div>
              <div className={`${eduStyles.horizontalConnector} ${eduStyles.rightYear}`}>
                <div
                  key={`line-12th-${textCycle}`}
                  className={`${eduStyles.linen} ${eduStyles.animatedLine}`}
                />
                <div
                  key={`circle-12th-${textCycle}`}
                  className={`${eduStyles.circle} ${eduStyles.animatedCircle}`}
                >
                  {animateText('2017–2019', 0, 0.1)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 10th */}
        {showFirst && (
          <div className={`${eduStyles.timelineItem} ${eduStyles.show}`}>
            <div className={eduStyles.centerRow}>
              <div className={`${eduStyles.horizontalConnector} ${eduStyles.leftYear}`}>
                <div
                  key={`line-10th-${textCycle}`}
                  className={`${eduStyles.linen} ${eduStyles.animatedLine}`}
                />
                <div
                  key={`circle-10th-${textCycle}`}
                  className={`${eduStyles.circle} ${eduStyles.animatedCircle}`}
                >
                  {animateText('2011–2017', 0, 0.1)}
                </div>
              </div>
              <div className={`${eduStyles.card} ${eduStyles.cardAnimate}`}>
                <h3>{animateHeading('10th Standard – WBBSE')}</h3>
                <AnimatedCardText
                  lines={[
                    'Madhyamgram Girls’ High School',
                    <>
                      Marks:{' '}
                      <span className={eduStyles.normalText}>83.14%</span>
                    </>,
                  ]}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {!showIntro && (
        <Link href="/" className={eduStyles.backBtn}>
          ← Back to Home
        </Link>
      )}
    </main>
  );
}
