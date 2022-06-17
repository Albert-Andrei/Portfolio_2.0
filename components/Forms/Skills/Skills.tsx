import { useState } from 'react';

import theme from '@theme/theme';
import { useDarkMode } from '@lib/dark-mode';
import { useParallax } from 'react-scroll-parallax';
import skillsData from './data/skills.json';
import iconsData from './data/icons.json';

import FloatingCard from '@components/Cards/FloatingCard';
import Typography from '@components/Typography';

import * as Styles from './Skills.styles';
import SkillCard from '@components/Cards/SkillCard';

const Skills: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();

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
          {iconsData.map((skill, index) => (
            <FloatingCard
              key={index}
              left={skill.offsetLeft}
              bottom={skill.offsetBottom}
              {...skill}
            />
          ))}
        </Styles.IconsContainer>

        <>
          {skillsData.map((skill, index) => (
            <Styles.SkillContent key={index}>
              <SkillCard
                title={skill.title}
                description={skill.description}
                scrollValues={skill.scrollValues}
              />
            </Styles.SkillContent>
          ))}
        </>
      </Styles.MainContainer>
    </Styles.SkillsContainer>
  );
};

export default Skills;
