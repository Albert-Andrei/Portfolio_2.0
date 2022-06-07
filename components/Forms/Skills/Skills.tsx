import { useState } from 'react';

import theme from '@theme/theme';
import { useDarkMode } from '@lib/dark-mode';
import { useParallax } from 'react-scroll-parallax';

import FloatingCard from '@components/Cards/FloatingCard';
import Typography from '@components/Typography';

import * as Styles from './Skills.styles';
import SkillCard from '@components/Cards/SkillCard';

const Skills: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  const skills = ['HTML', 'CSS', 'JavaScript'];

  const icons = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [50, 0],
    startScroll: 900,
    endScroll: 1300,
    scale: [1.2, 1, 'easeInOut'],
  });

  return (
    <Styles.SkillsContainer>
      <Typography
        spacingBefore={150}
        size={theme.fontSizes.header}
        color={darkMode ? theme.colors.grey1 : theme.colors.grey9}
      >
        Skills
      </Typography>

      <Typography
        size={theme.fontSizes.header * 2}
        spacingBefore={theme.spacings.xlarge}
        color={darkMode ? theme.colors.grey1 : theme.colors.grey9}
        font="bold"
      >
        Things I am good at
      </Typography>

      <Styles.MainContainer>
        <Styles.IconsContainer ref={icons.ref}>
          <FloatingCard icon="react" left={15} bottom={22} />
          <FloatingCard
            icon="node"
            iconSize={140}
            left={5}
            bottom={10}
            delay={1}
            zIndex={5}
          />
          <FloatingCard
            icon="mongodb"
            iconSize={100}
            left={30}
            bottom={2}
            zIndex={5}
          />
          <FloatingCard
            icon="next"
            iconSize={165}
            left={50}
            bottom={12}
            delay={0.7}
          />
          <FloatingCard
            icon="aws"
            iconSize={115}
            left={67}
            bottom={5}
            delay={0.7}
          />
          <FloatingCard
            icon="firebase"
            iconSize={90}
            left={75}
            bottom={32}
            delay={1.2}
          />
        </Styles.IconsContainer>

        <>
          {skills.map((skill, index) => (
            <Styles.SkillContent key={skill}>
              <SkillCard title={skill} />
            </Styles.SkillContent>
          ))}
        </>
      </Styles.MainContainer>
    </Styles.SkillsContainer>
  );
};

export default Skills;
