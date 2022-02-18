import * as React from 'react';
import styled from 'styled-components';

interface TypographyProps {
  color?: string;
  align?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
  onClick?: () => void;
  font?: 'regular' | 'bold';
  size?: number;
  lineHeight?: number;
  displayBlock?: boolean;
  spacingBefore?: number;
  spacingAfter?: number;
  underline?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  color,
  align = 'center',
  children,
  font = 'regular',
  size,
  lineHeight,
  spacingBefore,
  spacingAfter,
  displayBlock,
  underline,
  onClick,
}: TypographyProps): JSX.Element => (
  <TextContainer
    spacingBefore={spacingBefore}
    spacingAfter={spacingAfter}
    displayBlock={displayBlock}
    font={font}
    align={align}
    size={size}
    color={color}
    lineHeight={lineHeight}
    underline={underline}
  >
    {children}
  </TextContainer>
);

export default Typography;

export const TextContainer = styled.p<{
  type?: string;
  color?: string;
  align?: string;
  font?: string;
  fontMobile?: string;
  size?: number | null;
  sizeMobile?: number | null;
  lineHeight?: number;
  displayBlock?: boolean;
  underline?: boolean;
  spacingBefore?: number;
  spacingAfter?: number;
  spacingBeforeMobile?: number;
}>`
  font-family: 'Roboto', sans-serif;
  font-size: ${({ size, theme }) => (size ? size : theme.fontSizes.normal)}px;
  font-weight: ${({ font }) => (font === 'bold' ? '700' : '400')};
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  display: ${({ displayBlock }) => (displayBlock ? 'block' : 'flex')};
  text-align: ${({ align }) => (align ? align : 'left')};
  justify-content: ${({ align }) =>
    align === 'left'
      ? 'flex-start'
      : align === 'center'
      ? 'center'
      : 'flex-end'};
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight}px;` : '')}
  margin-top: ${({ spacingBefore }) => spacingBefore || 0}px;
  margin-bottom: ${({ spacingAfter }) => spacingAfter || 0}px;
  ${({ underline, color }) =>
    underline ? `border-bottom: 2px ${color} solid` : ''}
`;
