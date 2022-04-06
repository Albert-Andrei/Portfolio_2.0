import { useDarkMode } from '@lib/dark-mode';
import * as Styles from './Projects.styles';
import ProjectsData from '../../../data/ProjectsData';
import ParalaxCard from '@components/Cards/ParalaxCard';
import ParalaxHoverCard from '@components/Cards/ParalxHoverCard';

const Projects: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <Styles.ProjectsContaier>
      {ProjectsData.map((project, index) => (
        <Styles.Project key={index} reverse={index % 2 === 0}>
          <ParalaxCard extendedStyle={{ width: '70%' }}>
            <Styles.ContentContainer>
              {project.primaryImage}
            </Styles.ContentContainer>
          </ParalaxCard>
          <ParalaxHoverCard
            hover
            primary={project.primary}
            top={project.top}
            translate={[200, 0]}
            easing={[0, 0.4, 0.5, 1]}
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
      ))}
    </Styles.ProjectsContaier>
  );
};

export default Projects;
