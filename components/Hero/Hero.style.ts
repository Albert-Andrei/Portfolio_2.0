import styled from 'styled-components';

export const HeroContaier = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
`;

export const Content = styled.div`
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spacings.large * 10}px;
`;

export const SceneContaier = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  padding-bottom: ${({ theme }) => theme.spacings.large * 2}px;
`;

export const TsScene = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 700px;
  height: 600px;
`;

export const Helpers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 280px;
`;

export const Button = styled.button<{
  darkMode?: Boolean;
  hovered?: Boolean;
  projects?: Boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  border: 1.5px solid
    ${({ theme, darkMode }) =>
      darkMode ? theme.colors.grey1 : theme.colors.grey9};
  border-radius: 5px;
  transition: 0.2s;
  background-color: ${({ theme, hovered, projects, darkMode }) =>
    darkMode
      ? hovered
        ? projects
          ? theme.colors.grey9
          : theme.colors.grey1
        : projects
        ? theme.colors.grey1
        : theme.colors.grey9
      : hovered
      ? projects
        ? theme.colors.grey1
        : theme.colors.grey9
      : projects
      ? theme.colors.grey9
      : theme.colors.grey1};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
