import type { NextPage } from 'next';
import styled from 'styled-components';
import Typography from '@components/Typography';
import { useDarkMode } from '../packages/lib/dark-mode';
import theme from '../packages/theme';
import Hero from '@components/Hero';
import dynamic from 'next/dynamic';

const Landing: NextPage = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  // const Hero = dynamic(() => import('@components/Hero'), {
  //   ssr: false,
  // });

  return (
    <Main>
      <HerCont>
        <Hero />
      </HerCont>
      <TextContier>
        <Typography size={80}>Som text</Typography>
      </TextContier>
    </Main>
  );
};

export default Landing;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
`;

const HerCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContier = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: 'red';
`;
