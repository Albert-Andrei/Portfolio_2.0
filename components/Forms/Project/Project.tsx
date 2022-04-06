import { useDarkMode } from '@lib/dark-mode';
import * as Styles from './Project.styles';
import ParalaxCard from '@components/Cards/ParalaxCard';
import ParalaxHoverCard from '@components/Cards/ParalxHoverCard';
import { useState } from 'react';
import theme from '@theme/theme';

export interface ProjectsProps {
  index: number;
  project: any;
}

const Projects: React.FC<ProjectsProps> = ({
  project,
  index,
}: ProjectsProps) => {
  // Hooks
  const { darkMode } = useDarkMode();
  const [show, setShow] = useState(false);

  return (
    <Styles.Project reverse={index % 2 === 0}>
      <ParalaxCard
        extendedStyle={{ width: '70%' }}
        setShowContent={(progress) =>
          progress > 0.8 ? setShow(true) : setShow(false)
        }
      >
        <Styles.ContentContainer>
          {project.primaryImage}
        </Styles.ContentContainer>
      </ParalaxCard>

      <Styles.InfoContaier>
        <Styles.DecriptionLine
          show={show}
          style={{
            background: darkMode ? theme.colors.grey3 : theme.colors.grey9,
          }}
        />
      </Styles.InfoContaier>

      <ParalaxHoverCard
        hover
        primary={project.primary}
        top={project.top}
        translate={project.top ? [250, 0] : [200, 0]}
        easing={project.top ? [0, 0.2, 0.4, 1] : [0, 0.4, 0.5, 1]}
        extendedStyle={{
          background: 'pink',
          width: project.width ? project.width : 400,
          height: project.height ? project.height : 300,
        }}
      >
        <Styles.ContentContainer>
          {project.secondaryImage}
        </Styles.ContentContainer>
      </ParalaxHoverCard>
    </Styles.Project>
  );
};

export default Projects;
