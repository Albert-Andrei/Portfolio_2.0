import styled from 'styled-components';

export const MainContaier = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const LinkContent = styled.a<{darkMode?: boolean}>`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 65px;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 5px;
    background: ${({ theme, darkMode }) => darkMode ? theme.colors.grey2 : theme.colors.grey9}; 

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25s ease-in;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const IconWrapper = styled.div`
  margin-left: 30px;
`;

