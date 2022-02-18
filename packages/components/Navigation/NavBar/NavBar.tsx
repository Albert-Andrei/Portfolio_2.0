import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import theme from '../../../theme';
import Icon from '../../Icon';
import SideBar from './sidebar/SideBar';
import { useDarkMode } from '../../../lib/dark-mode';

const NavBar: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <NavigationContaier>
      <LogoCont>
        <Link href="/">
          <a className="logo">
            <Icon
              id="logo"
              width={50}
              height={55}
              color={darkMode ? theme.colors.grey8 : theme.colors.black}
            />
          </a>
        </Link>
      </LogoCont>
      <SideBar />
    </NavigationContaier>
  );
};

export default NavBar;

const NavigationContaier = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 50;
`;

const moveLogo = keyframes`
    0% {
    left: 0px;
    top: 0px;
  }
  100% {
    left: 20px;
  }
`;

const LogoCont = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  animation: ${moveLogo} 1s;
`;
