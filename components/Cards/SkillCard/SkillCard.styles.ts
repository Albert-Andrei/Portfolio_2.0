import styled from 'styled-components';

export const SkillCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  background-color: red;
  padding: 0 ${({ theme }) => theme.spacings.xxlarge}px;
`;
