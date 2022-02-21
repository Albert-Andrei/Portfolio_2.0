import React from 'react';
import styled from 'styled-components';
import { Logo } from './Icons/Logo';
import { Moon } from './Icons/Moon';
import { Sun } from './Icons/Sun';

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  color?: string | null;
}

const Icon: React.FC<IconProps> = ({
  id,
  width,
  height,
  color,
}: IconProps): JSX.Element | null => {
  const data: any = {
    logo: {
      content: <Logo color={color} />,
      width: 100,
      height: 105,
    },
    moon: {
      content: <Moon />,
      width: 40,
      height: 40,
    },
    sun: {
      content: <Sun />,
      width: 40,
      height: 40,
    },
  };

  const icon = data[id];
  if (!icon) {
    return null;
  }

  return (
    <Wrapper width={width || icon.width} height={height || icon.height}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${icon.width} ${icon.height}`}
      >
        {icon.content}
      </svg>
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
