// 'use client';

// import { useEffect, useState } from 'react';
// import styles from '../styles/Projects.module.css';

// const projectSteps = [
//   {
//     heading: 'Are you interested in Web Design?',
//     project: {
//       title: 'Buy-From-Us',
//       description: 'Tiles and stones shop built with Wix, focused on clean responsive design.',
//       link: 'https://sristimitra637.wixsite.com/website',
//     },
//   },
//   {
//     heading: 'How about Real-Time News?',
//     project: {
//       title: 'NewsWave',
//       description: 'React.js app with NewsAPI integration for live headlines & categories.',
//       link: 'https://github.com/sristi-2002/NewsWave',
//     },
//   },
//   {
//     heading: 'Are you interested in Banking Software?',
//     project: {
//       title: 'Online Banking System',
//       description: 'Java + MySQL backend with secure login, transactions, and account management.',
//       link: 'https://github.com/sristi-2002/Online-Bank',
//     },
//   },
//   {
//     heading: 'Interested in Cybersecurity & Encryption?',
//     project: {
//       title: 'Visual Cryptography',
//       description: 'Python-based secure encryption of images/text using RGB logic.',
//       link: 'https://github.com/sristi-2002/Visual-Cryptography-Project',
//     },
//   },
// ];

// export default function LaptopProjects() {
//   const [intro, setIntro] = useState('Are you interested in my project?');
//   const [typedIntro, setTypedIntro] = useState('');
//   const [input, setInput] = useState('');
//   const [confirmed, setConfirmed] = useState(false);
// const [showCard, setShowCard] = useState(false);

//   const [step, setStep] = useState(0);
//   const [text, setText] = useState('');
//   const [showAll, setShowAll] = useState(false);

//   // Typing animation for intro
//   useEffect(() => {
//     let index = 0;
//     setTypedIntro('');
//     const typing = setInterval(() => {
//       if (index < intro.length) {
//         setTypedIntro(prev => prev + intro.charAt(index));
//         index++;
//       } else {
//         clearInterval(typing);
//       }
//     }, 50);
//     return () => clearInterval(typing);
//   }, [intro]);

//   // Typing animation for each project heading after confirmation
// useEffect(() => {
//   if (!confirmed || step >= projectSteps.length) {
//     if (step >= projectSteps.length) {
//       const timeout = setTimeout(() => setShowAll(true), 1500);
//       return () => clearTimeout(timeout);
//     }
//     return;
//   }

//   const currentText = projectSteps[step].heading;
//   let index = 0;
//   setText('');
//   setShowCard(false); // Reset card visibility for next step

//   const typing = setInterval(() => {
//     if (index < currentText.length) {
//       setText(prev => prev + currentText.charAt(index));
//       index++;
//     } else {
//       clearInterval(typing);
//       setTimeout(() => {
//         setShowCard(true); // Show card AFTER heading is fully typed
//         setTimeout(() => setStep(prev => prev + 1), 4000); // Then move to next
//       }, 500); // slight delay before showing the card
//     }
//   }, 60);

//   return () => clearInterval(typing);
// }, [step, confirmed]);


//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.toUpperCase().trim();
//     setInput(value);
//     if (value === 'YES') {
//       setConfirmed(true);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.laptopFrame}>
//         <div className={styles.screen}>
//           {!confirmed && (
//             <>
//               <h2 className={styles.typing}>{typedIntro}</h2>
//               <input
//                 className={styles.input}
//                 value={input}
//                 onChange={handleInputChange}
//                 placeholder="Type YES to continue..."
//                 autoFocus
//               />
//             </>
//           )}

//           {confirmed && !showAll && (
//             <>
//               <h2 className={styles.typing}>{text}</h2>
//              {showCard && step > 0 && (() => {
//   const currentStep = projectSteps[step - 1];
//   return (
//     <div className={`${styles.card} ${styles.cardVisible}`}>
//       <h3>{currentStep.project.title}</h3>
//       <p>{currentStep.project.description}</p>
//       <a href={currentStep.project.link}>{currentStep.project.link}</a>
//     </div>
//   );
// })()}


//             </>
//           )}

//           {showAll && (
//             <div className={styles.allProjects}>
//               <h2 className={styles.finalHeading}>📂 All Projects</h2>
//               <div className={styles.grid}>
//                 {projectSteps.map((item, i) => (
//                   <div key={i} className={styles.gridCard}>
//                     <h3>{item.project.title}</h3>
//                     <p>{item.project.description}</p>
//                     <a
//                       href={item.project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       🔗
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/Projects.module.css';

const projectSteps = [
  {
    heading: ' Are you interested in Web Design?',
    project: {
      title: 'Buy-From-Us',
      description: 'Tiles and stones shop built with Wix, focused on clean responsive design.',
      link: 'https://sristimitra637.wixsite.com/website',
    },
  },
  {
    heading: ' How about Real-Time News?',
    project: {
      title: 'NewsWave',
      description: 'React.js app with NewsAPI integration for live headlines & categories.',
      link: 'https://github.com/sristi-2002/NewsWave',
    },
  },
  {
    heading: ' Are you interested in Banking Software?',
    project: {
      title: 'Online Banking System',
      description: 'Java + MySQL backend with secure login, transactions, and account management.',
      link: 'https://github.com/sristi-2002/Online-Bank',
    },
  },
  {
    heading: ' Interested in Cybersecurity & Encryption?',
    project: {
      title: 'Visual Cryptography',
      description: 'Python-based secure encryption of images/text using RGB logic.',
      link: 'https://github.com/sristi-2002/Visual-Cryptography-Project',
    },
  },
];

export default function LaptopProjects() {
  const [typedIntro, setTypedIntro] = useState('');
  const [input, setInput] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const [step, setStep] = useState(0);
  const [typedHeading, setTypedHeading] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [showStep, setShowStep] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Intro typing animation
  useEffect(() => {
  const intro = 'Are you interested in my project?';
  let index = 0;

  const typing = setInterval(() => {
    if (index <= intro.length) {
      setTypedIntro(intro.slice(0, index)); // Always build from the source string
      index++;
    } else {
      clearInterval(typing);
    }
  }, 50);

  return () => clearInterval(typing);
}, []);


  // Step-by-step animation
  useEffect(() => {
    if (!confirmed || step >= projectSteps.length) {
      if (step === projectSteps.length) {
        setTimeout(() => setShowAll(true), 1000);
      }
      return;
    }

    const currentHeading = projectSteps[step].heading;
    let index = 0;
    setTypedHeading('');
    setShowCard(false);
    setShowStep(true);

    const typing = setInterval(() => {
      if (index < currentHeading.length) {
        setTypedHeading(prev => prev + currentHeading.charAt(index));
        index++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setShowCard(true);
          setTimeout(() => {
            setShowStep(false);
            setTimeout(() => setStep(prev => prev + 1), 500);
          }, 5000);
        }, 5000);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [confirmed, step]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().trim();
    setInput(value);
    if (value === 'YES') {
      setConfirmed(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.laptopFrame}>
        <div className={styles.screen}>
          {!confirmed && (
            <>
              <h2 className={styles.typing}>{typedIntro}</h2>
              <input
                className={styles.input}
                value={input}
                onChange={handleInputChange}
                placeholder="Type YES to continue..."
                autoFocus
              />
            </>
          )}

          {confirmed && showStep && (
            <>
              <h2 className={styles.typing}>{typedHeading}</h2>
              {showCard && (
                <div className={`${styles.card} ${styles.cardVisible}`}>
                  <h3>{projectSteps[step].project.title}</h3>
                  <p>{projectSteps[step].project.description}</p>
                  <a
                    href={projectSteps[step].project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectSteps[step].project.link}
                  </a>
                </div>
              )}
            </>
          )}

          {showAll && (
            <div className={styles.allProjects}>
              <h2 className={styles.finalHeading}>📂 All Projects</h2>
              <div className={styles.grid}>
                {projectSteps.map((item, i) => (
                  <div key={i} className={styles.gridCard}>
                    <h3>{item.project.title}</h3>
                    <p>{item.project.description}</p>
                    <a
                      href={item.project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
