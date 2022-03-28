import styled from 'styled-components';

export const ProjectsContaier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Project = styled.div<{reverse?: boolean}>`
height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'row' : 'row-reverse'};
  justify-content: center;
  align-items: center;
`;

export const MainImage = styled.div`
  height: 300px;
  width: 500px;
  background: lightblue;
`;

export const SecondaryImage = styled.div`
  height: 150px;
  width: 150px;
  background: pink;
`;
