import Data from '../../../../data/NavigationData';
import Link from 'next/link';
import * as Styles from './TopBarStyles';
import Switch from '@components/Switch';
import { useDarkMode } from '@lib/dark-mode';
import Typography from '@components/Typography';
import theme from '@theme/index';

export const SideBar: React.FC = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <Styles.PathContainer>
      {Data.map((item, index) => (
        <Link key={index} href={item.path} passHref>
          <a>
            <Typography
              color={darkMode ? theme.colors.white : theme.colors.black}
              align="left"
              font="bold"
              size={theme.fontSizes.subHeader}
            >
              {item.title}
            </Typography>
          </a>
        </Link>))}
      <Switch checked={darkMode} onChange={setDarkMode} />
    </Styles.PathContainer>
  );
};

export default SideBar;
