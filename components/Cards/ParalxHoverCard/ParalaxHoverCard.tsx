import * as Styles from './ParalaxHoverCard.styles';
import { useParallax } from 'react-scroll-parallax';

interface ParalaxCardProps {
  extendedStyle?: React.CSSProperties;
  children?: React.ReactNode;
  translate?: [number, number];
  easing?: [number, number, number, number];
  hover?: boolean;
  primary?: boolean;
  top?: boolean;
}

const ParalaxHoverCard: React.FC<ParalaxCardProps> = ({
  extendedStyle,
  children,
  translate,
  easing,
  hover,
  primary,
  top,
}: ParalaxCardProps) => {
  const parallax = useParallax<HTMLDivElement>({
    easing: easing ? easing : [0, 0.1, 0.3, 1],
    translateY: translate ? translate : [80, 0],
  });

  return (
    <Styles.ParalaxContaier
      ref={parallax.ref}
      style={{ ...extendedStyle }}
      hover={hover}
      primary={primary}
      top={top}
    >
      {children}
    </Styles.ParalaxContaier>
  );
};

export default ParalaxHoverCard;
