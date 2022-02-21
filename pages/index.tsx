import type { NextPage } from 'next';
import styled from 'styled-components';
import Typography from '@components/Typography';
import { useDarkMode } from '../packages/lib/dark-mode';
import theme from '../packages/theme';
import Hero from '@components/Hero';

const Landing: NextPage = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <Main>
      <Hero />
      <Typography
        color={darkMode ? theme.colors.white : theme.colors.black}
        align="left"
        font="bold"
        size={50}
      >
        Hi there 👋
        <br /> I&rsquo;m Albert, a simple
        <br /> software engineer 👨🏻‍💻
      </Typography>
    </Main>
  );
};

export default Landing;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
`;
