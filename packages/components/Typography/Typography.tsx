import { TextContainer } from './Styles';

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
