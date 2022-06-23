import styled from 'styled-components';

export const SkillCard = styled.div`
  width: 50%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  padding: 0 ${({ theme }) => theme.spacings.xlarge * 2}px;
`;

export const ContentTitle = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.small}px;
`;

export const SubContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacings.xlarge}px;
`;
