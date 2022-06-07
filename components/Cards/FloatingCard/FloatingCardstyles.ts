import styled, { keyframes } from 'styled-components';
import * as HoverCard from '@radix-ui/react-hover-card';

const floating = keyframes`
 0% { transform: translateY(0px); }
 50% { transform: translateY(-20px); }
 100% { transform: translateY(0px); }
`;

export const MainContainer = styled.div<{
  left?: number;
  bottom?: number;
  zIndex?: number;
}>`
  position: absolute;
  left: ${({ left }) => (left ? left : 10)}%;
  bottom: ${({ bottom }) => (bottom ? bottom : 10)}%;
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
`;

export const FloatingContainer = styled.div<{ delay?: number }>`
  overflow: hidden;
  transform: translateY(0px);
  animation: ${floating} 6s ease-in-out infinite;
  ${({ delay }) => delay && `animation-delay: ${delay}s;`}
  border-radius: 100px;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Content = styled(HoverCard.Content)`
  border-radius: 10px;
  padding: 20px;
  height: 150px;
  width: 200px;
  background-color: pink;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  /* '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  }, */
`;

export const Arrow = styled(HoverCard.Arrow)`
  fill: white;
`;
