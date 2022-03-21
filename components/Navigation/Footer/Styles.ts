import styled from 'styled-components';

export const FooterContaier = styled.footer`
z-index: 50;
width: 100%;
height: 70px;
display: flex;
justify-content: flex-start;
align-items: space-between;
padding: 0 150px;

@media (max-width: 700px) {
  justify-content: center;
  flex-direction: column;
  padding: 0 25px;
}

@media (max-width: 500px) {
  height: 150px;
}
`;

export const SocialMediaLinks = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;

@media (max-width: 700px) {
  align-items: center;
  justify-content: center;
}
`;

export const SocialItem = styled.div<{
hoverColor?: string;
isSpotify?: boolean;
}>`
margin: 0 10px;
display: flex;
justify-content: flex-start;
align-items: flex-start;

&:hover {
  transition: 0.2s;
  transform: scale(1.2);

  path {
    stroke: ${({ isSpotify }) => (isSpotify ? 'black' : '')};
    fill: ${({ hoverColor }) => hoverColor};
  }
}
`;

export const MadeWithLove = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

@media (max-width: 700px) {
  margin-top: 25px;
}
`;

export const Address = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-start;

@media (max-width: 700px) {
  display: none;
}
`;
