
import styled from 'styled-components';

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
  