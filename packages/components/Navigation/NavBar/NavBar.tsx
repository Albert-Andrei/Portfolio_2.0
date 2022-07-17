import Link from 'next/link';
import theme from '../../../theme';
import Icon from '../../Icon';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';
import { useDarkMode } from '../../../lib/dark-mode';
import * as Styles from './Styles';
import useMobileDetect from '../../../lib/use-mobile-detect'
import { useEffect, useState } from 'react';

const NavBar: React.FC = () => {
  // Hooks
  const currentDevice = useMobileDetect();
  const { darkMode } = useDarkMode();
  const [isMobile, setisMobile] = useState<boolean>(false);

  useEffect(() => {
    setisMobile(currentDevice.isMobile());
  }, [currentDevice]);


  return (
    <Styles.NavigationContaier>
      <Styles.LogoCont>
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
      </Styles.LogoCont>
      ({isMobile ? <SideBar /> : <TopBar />})
    </Styles.NavigationContaier>
  );
};

export default NavBar;