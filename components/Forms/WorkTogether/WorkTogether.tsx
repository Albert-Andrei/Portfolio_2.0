import Icon from '@components/Icon';
import Typography from '@components/Typography';
import { useDarkMode } from '@lib/dark-mode';
import theme from '@theme/global';
import Link from 'next/link';
import * as Styles from './WorkTogether.styles';

const WorkTogether: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <Styles.MainContaier>
      <Typography
        color={darkMode ? theme.colors.grey3 : theme.colors.grey5}
        uppercase
        letterSpacing={4}
        size={theme.fontSizes.normal}
        spacingAfter={theme.spacings.medium}
      >
        Need some help?
      </Typography>

      <Link href="/contacts" passHref>
        <Styles.LinkContent darkMode={darkMode}>
          <Typography
            font="bold"
            size={theme.fontSizes.display * 2.2}
            letterSpacing={2}
            color={darkMode ? theme.colors.grey2 : theme.colors.grey9}
          >
            Let’s work together
          </Typography>
          <Styles.IconWrapper>
            <Icon
              id="arrowRight"
              color={darkMode ? theme.colors.grey2 : theme.colors.grey9}
              width={60}
              height={50}
            />
          </Styles.IconWrapper>
        </Styles.LinkContent>
      </Link>
    </Styles.MainContaier>
  );
};

export default WorkTogether;
