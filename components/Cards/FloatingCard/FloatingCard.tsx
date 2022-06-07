import * as Styles from './FloatingCardstyles';
import Icon from '@components/Icon';
import { useDarkMode } from '@lib/dark-mode';
import * as HoverCard from '@radix-ui/react-hover-card';
import Link from 'next/link';

interface FloatingCardProps {
  icon: string;
  left?: number;
  bottom?: number;
  iconSize?: number;
  delay?: number;
  zIndex?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  icon,
  left,
  bottom,
  iconSize,
  delay,
  zIndex,
}: FloatingCardProps) => {
  // Hooks
  const { darkMode } = useDarkMode();

  return (
    <Styles.MainContainer left={left} bottom={bottom}>
      <Styles.FloatingContainer delay={delay}>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <div style={{ width: '100%', height: '100%' }}>
              <Link href={'/'}>
                <a>
                  <Icon
                    id={darkMode ? icon : icon + 'Light'}
                    width={iconSize}
                    height={iconSize}
                  />
                </a>
              </Link>
            </div>
          </HoverCard.Trigger>
          <Styles.Content sideOffset={0}>
            <Styles.Arrow />
          </Styles.Content>
        </HoverCard.Root>
      </Styles.FloatingContainer>
    </Styles.MainContainer>
  );
};

export default FloatingCard;
