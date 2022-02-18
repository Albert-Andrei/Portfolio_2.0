import Icon from '../Icon/Icon';
import styled from 'styled-components';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export interface SwitchProps {
  checked?: boolean;
  onChange: (e?: any) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
}: SwitchProps) => {
  return (
    <SwitchContaier checked={checked} onCheckedChange={onChange}>
      <IconCont>
        <Icon id="moon" width={25} height={25} />
      </IconCont>
      <IconCont reverse>
        <Icon id="sun" width={25} height={25} />
      </IconCont>
      <Thumb>
        <ThumbContent />
      </Thumb>
    </SwitchContaier>
  );
};

const SwitchContaier = styled(SwitchPrimitive.Root)`
  all: unset;
  position: fixed;
  bottom: 20px;
  right: 30px;
  box-sizing: border-box;
  width: 50px;
  height: 28px;
  background-color: #252525;
  border-radius: 9999px;
  cursor: pointer;
`;

const Thumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  transition: transform 350ms ease-in-out;
  transform: translateX(4px);
  will-change: transform;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &[data-state='checked'] {
    transform: translateX(25px);
  }
`;

const ThumbContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: white;
`;

const IconCont = styled.div<{ reverse?: boolean }>`
  position: absolute;
  top: 1px;
  left: ${({ reverse }) => (reverse ? 25 : 0)}px;
  transition: left 350ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;
