import type { NextPage } from 'next';
import styled from 'styled-components';
import { useDarkMode } from '@lib/dark-mode';
import { useEffect, useState } from 'react';
import Hero from '@components/Hero';
import Skills from '@components/Forms/Skills';
import WorkTogether from '@components/Forms/WorkTogether/WorkTogether';
import Project from '@components/Forms/Project';
import ProjectsData from '@data/ProjectsData';

const Landing: NextPage = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  // States
  const [show, setShow] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset - screen.height);

  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');

    window.addEventListener('scroll', () => {
      faders.forEach((entry) => {
        var top = entry.getBoundingClientRect().top;

        if (top < window.innerHeight) {
          setShow(true);
        }
      });
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Main>
      <Hero />
      <Skills />

      <ProjectsContaier>
        {ProjectsData.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </ProjectsContaier>
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

const TextContier = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-in;
`;

const AboutText = styled.div`
  max-width: 400px;
`;

const ProjectsContaier = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
