// components/Description/index.tsx

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Rounded from '../../common/RoundedButton';
import styles from './style.module.scss';
import { slideUp, opacity } from './animation';

const Description: React.FC = () => {
  const phrase =
    'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';

  const description = useRef<HTMLDivElement>(null);
  const isInView = useInView(description, { once: true });

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(' ').map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
};

export default Description;
