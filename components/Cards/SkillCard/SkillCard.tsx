import { useState } from 'react';

import { useParallax } from 'react-scroll-parallax';

import * as Styles from './SkillCard.styles';

interface SkillCardProps {
  title: string;
  description?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description }) => {
  // State
  const [contentProgress, setContentProgress] = useState(0);

  const rightS = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [150, 0],
    startScroll: 1050,
    endScroll: 1500,
    opacity: [0, 1, 'easeInOut'],
    onProgressChange: (progress) => {
      setContentProgress(progress);
    },
  });

  const rightM = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [70, 0],
    startScroll: 1050,
    endScroll: 1500,
    opacity: [0, 1, 'easeInOut'],
  });

  return (
    <Styles.SkillCard>
      <div ref={rightS.ref} style={{ marginTop: 100 }}>
        <h1>{title}</h1>
      </div>
      <div ref={rightM.ref}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione
          velit provident mollitia, rem eligendi atque non, iusto quas facilis
          nam reiciendis impedit? Cumque ad animi praesentium laboriosam
          distinctio dolore.
        </p>
      </div>
    </Styles.SkillCard>
  );
};

export default SkillCard;
