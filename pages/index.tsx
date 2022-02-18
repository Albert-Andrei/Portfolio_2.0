import type { NextPage } from 'next';
import styled from 'styled-components';
import Icon from '../packages/components/Icon';
import Typography from '@components/Typography';
import { useDarkMode } from '../packages/lib/dark-mode';
import theme from '../packages/theme';

const Landing: NextPage = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <Main>
      <Typography
        color={darkMode ? theme.colors.white : theme.colors.black}
        align="left"
        font="bold"
        size={50}
      >
        Hi there 👋
        <br /> I'm Albert, a simple
        <br /> software engineer 👨🏻‍💻
      </Typography>
      <Typography
        color={darkMode ? theme.colors.white : theme.colors.black}
        align="left"
        size={50}
      >
        not bold iopt
      </Typography>
    </Main>
  );
};

export default Landing;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
`;
