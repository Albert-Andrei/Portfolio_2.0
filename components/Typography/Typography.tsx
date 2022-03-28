import { TextContainer } from './Typography.styles';

interface TypographyProps {
  color?: string;
  align?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
  onClick?: () => void;
  font?: 'regular' | 'normal' | 'bold';
  size?: number;
  lineHeight?: number;
  displayBlock?: boolean;
  spacingBefore?: number;
  spacingAfter?: number;
  underline?: boolean;
  uppercase?: boolean;
  letterSpacing?: number;
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
  uppercase,
  letterSpacing,
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
    uppercase={uppercase}
    letterSpacing={letterSpacing}
  >
    {children}
  </TextContainer>
);

export default Typography;
