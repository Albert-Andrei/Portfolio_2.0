import * as Styles from './ParalaxCard.styles';
import { useParallax } from 'react-scroll-parallax';

interface ParalaxCardProps {
  extendedStyle?: React.CSSProperties;
  children?: React.ReactNode;
  setShowContent?: (showContent: boolean) => void;
}

const ParalaxCard: React.FC<ParalaxCardProps> = ({
  extendedStyle,
  children,
  setShowContent,
}: ParalaxCardProps) => {
  const parallax = useParallax<HTMLDivElement>({
    easing: [0, 0.1, 0.3, 1],
    translateY: [80, 0],
    onProgressChange: (progress) => {
      progress > 0.3 && setShowContent;
    },
  });

  return (
    <Styles.ParalaxContaier ref={parallax.ref} style={{ ...extendedStyle }}>
      {children}
    </Styles.ParalaxContaier>
  );
};

export default ParalaxCard;