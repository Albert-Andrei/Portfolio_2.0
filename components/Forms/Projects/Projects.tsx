import Typography from '@components/Typography';
import { useDarkMode } from '@lib/dark-mode';
import theme from '@theme/global';
import { useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import * as Styles from './Projects.styles';

const Projects: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();
  const projects = [1, 2, 3, 4, 5];

  // States
  const [hovered, setHovered] = useState(false);

  const parallax = useParallax<HTMLDivElement>({
    easing: [1, -0.75, 0.5, 1.34],
    translateY: [0, 100],
  });

  const parallax2 = useParallax<HTMLDivElement>({
    translateY: [0, 10, 'easeInQuad'],
  });

  return (
    <Styles.ProjectsContaier>
      {projects.map((project) => (
        <Styles.Project key={project} reverse={project % 2 === 1}>
          <Styles.MainImage ref={parallax.ref} />
          <Styles.SecondaryImage ref={parallax2.ref} />
        </Styles.Project>
      ))}
    </Styles.ProjectsContaier>
  );
};

export default Projects;
