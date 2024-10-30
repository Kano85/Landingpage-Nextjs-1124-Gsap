// components/AnimatedBox.tsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className="w-32 h-32 bg-blue-500 rounded flex items-center justify-center"
    >
      {'Animate Me'}
    </div>
  );
};

export default AnimatedBox;
