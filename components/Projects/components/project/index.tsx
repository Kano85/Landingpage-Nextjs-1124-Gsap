// components/Projects/components/project/index.tsx

import React from 'react';
import styles from './style.module.scss';

interface ProjectProps {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

const ProjectComponent: React.FC<ProjectProps> = ({
  index,
  title,
  manageModal,
}) => {
  return (
    <div
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};

export default ProjectComponent;
