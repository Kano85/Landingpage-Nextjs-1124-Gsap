// components/Header/index.tsx

import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Nav from './nav';
import styles from './style.module.scss';
import useIsomorphicLayoutEffect from '../../utils/useIsomorphicLayoutEffect';

const Header: React.FC = () => {
  const header = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: 'power1.out',
            });
          },
          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: 'power1.out',
            });
            setIsActive(false);
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        {/* ... your logo and navigation components ... */}
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;
