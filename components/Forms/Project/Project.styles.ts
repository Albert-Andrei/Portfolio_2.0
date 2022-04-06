import styled from 'styled-components';

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

export const DecriptionLine = styled.div<{ show?: boolean }>`
  width: ${({ show }) => (show ? '100%' : '0%')};
  height: 1px;
  position: absolute;
  top: 150px;
  left: 0;
  transition: all 0.5s;
`;

export const InfoContaier = styled.div`
  width: 30%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;
