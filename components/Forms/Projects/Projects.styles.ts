import styled from 'styled-components';

export const ProjectsContaier = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Project = styled.div<{ reverse?: boolean }>`
  position: relative;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row' : 'row-reverse')};
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 110px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  span {
    border-radius: 10px;
  }
`;
