import type { NextPage } from 'next';
import styled, { keyframes } from 'styled-components';
import Typography from '@components/Typography';
import { useDarkMode } from '@lib/dark-mode';
import theme from '@theme/global';
import { useEffect, useState } from 'react';
import Hero from '@components/Hero';
import Skills from '@components/Forms/Skills';
import Projects from '@components/Forms/Projects';
import WorkTogether from '@components/Forms/WorkTogether/WorkTogether';

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
      <Projects />

      <TextContier style={{ opacity: show ? 1 : 0 }} className="fade-in">
        <AboutText>
          <Typography
            size={22}
            color={darkMode ? theme.colors.white : theme.colors.grey8}
          >
            I{'\xb4'}m Albert
          </Typography>
        </AboutText>
      </TextContier>

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
