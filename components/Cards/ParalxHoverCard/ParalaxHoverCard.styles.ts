import styled from 'styled-components';

export const ParalaxContaier = styled.div<{
  hover?: boolean;
  primary?: boolean;
  top?: boolean;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ hover }) => hover && `position: absolute;`}
  z-index: ${({ primary }) => (primary ? '10' : '0')};
  ${({ top }) =>
    top
      ? `left: 0;
      top: 100px;
      background: pink;`
      : `right: 0;
      bottom: 0;
      background: pink;`}
  border-radius: 10px;
`;
