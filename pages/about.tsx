import type { NextPage } from 'next';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import Typography from '@components/Typography';
import theme from '@theme/theme';
import { useEffect } from 'react';
import router from 'next/router';

const About: NextPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session]);

  return (
    <Main>
      {session ? (
        <>
          <Typography size={theme.fontSizes.header} color={theme.colors.grey3}>
            Welcome {session.user?.name}
          </Typography>
        </>
      ) : (
        <>
          <Typography size={theme.fontSizes.header} color={theme.colors.grey3}>
            You are not signed in
          </Typography>
        </>
      )}
    </Main>
  );
};

export default About;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
  padding: 0 100px;
`;
