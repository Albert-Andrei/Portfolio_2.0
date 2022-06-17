import React from 'react';
import { useState } from 'react';

import { useParallax } from 'react-scroll-parallax';

import * as Styles from './SkillCard.styles';

interface SkillCardProps {
  title: string;
  description: string;
  scrollValues: { start: number; end: number };
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  scrollValues,
}) => {
  // State
  const [contentProgress, setContentProgress] = useState(0);

  const main = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      setContentProgress(progress);
    },
  });

  const rightS = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [150, 0],
    startScroll: scrollValues.start,
    endScroll: scrollValues.end,
    opacity: [0, 1, 'easeInOut'],
  });

  const rightM = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [70, 0],
    startScroll: scrollValues.start,
    endScroll: scrollValues.end,
    opacity: [0, 1, 'easeInOut'],
  });

  React.useEffect(() => {
    console.log(title, ' progress: ', contentProgress, contentProgress < 0.5);
  }, [contentProgress]);

  return (
    <Styles.SkillCard
      ref={main.ref}
      style={{ opacity: contentProgress < 0.5 ? 1 : 0 }}
    >
      <div ref={rightS.ref} style={{ marginTop: 100 }}>
        <h1>{title}</h1>
      </div>
      <div ref={rightM.ref}>
        <p>{description}</p>
      </div>
    </Styles.SkillCard>
  );
};

export default SkillCard;
