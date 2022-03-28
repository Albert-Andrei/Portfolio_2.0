import Typography from '@components/Typography';
import { useDarkMode } from '@lib/dark-mode';
import theme from '@theme/global';
import { useState } from 'react';
import * as Styles from './Skills.styles';

const Skills: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  // States
  const [hovered, setHovered] = useState(false);

  return (
    <Styles.SkillsContaier>
      <Typography size={25} color="white">
        Skills
      </Typography>
    </Styles.SkillsContaier>
  );
};

export default Skills;
