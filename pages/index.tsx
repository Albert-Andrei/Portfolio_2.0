import type { NextPage } from 'next';
import styled from 'styled-components';
import { useDarkMode } from '@lib/dark-mode';
import { useRef } from 'react';
import Hero from '@components/Hero';
import Skills from '@components/Forms/Skills';
import WorkTogether from '@components/Forms/WorkTogether/WorkTogether';
import Project from '@components/Forms/Project';
import ProjectsData from '@data/ProjectsData';
import Typography from '@components/Typography';
import theme from '@theme/theme';

const Landing: NextPage = () => {
  // Hooks
  const { darkMode } = useDarkMode();
  const project = useRef<HTMLDivElement>(null);

  const scrollToProject = () => {
    if (project.current) {
      project.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Main>
      <Hero onClick={scrollToProject} />
      <Skills />

      <ProjectsTitle ref={project} className="fade-in">
        <Typography
          spacingBefore={150}
          size={theme.fontSizes.header}
          color={darkMode ? theme.colors.grey1 : theme.colors.grey9}
        >
          Projects
        </Typography>

        <Typography
          size={theme.fontSizes.header * 2}
          spacingBefore={theme.spacings.xlarge}
          color={darkMode ? theme.colors.grey1 : theme.colors.grey9}
          font="bold"
        >
          Some of my recent works
        </Typography>
      </ProjectsTitle>
      <ProjectsContainer>
        {ProjectsData.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </ProjectsContainer>
      <WorkTogether />
    </Main>
  );
};

export default Landing;

const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
  padding: 0 100px;
`;

const ProjectsTitle = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ProjectsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
