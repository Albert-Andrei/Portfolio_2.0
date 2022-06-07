import styled from 'styled-components';
import { Logo } from './Icons/Logo';
import { Moon } from './Icons/Moon';
import { Sun } from './Icons/Sun';
import { CircleChros } from './Icons/CircleChros';
import { ArrowRight } from './Icons/ArrowRight';
import { Facebook } from './Icons/Facebook';
import { Instagram } from './Icons/Instagram';
import { LinkedIn } from './Icons/LinkedIn';
import { GitHub } from './Icons/GitHub';
import { React } from './Icons/React';
import { ReactLight } from './Icons/ReactLight';
import { Node } from './Icons/Node';
import { NodeLight } from './Icons/NodeLight';
import { Next } from './Icons/Next';
import { NextLight } from './Icons/NextLight';
import { MongoDB } from './Icons/MongoDB';
import { MongoDBLight } from './Icons/MongoDBLight';
import { Firebase } from './Icons/Firebase';
import { FirebaseLight } from './Icons/FirebaseLight';
import { AWS } from './Icons/AWS';
import { AWSLight } from './Icons/AWSLight';

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  hover?: boolean;
  color?: string | null;
}

const Icon: React.FC<IconProps> = ({
  id,
  width,
  height,
  hover,
  color,
}: IconProps): JSX.Element | null => {
  const data: any = {
    logo: {
      content: <Logo color={color} />,
      width: 100,
      height: 105,
    },
    moon: {
      content: <Moon />,
      width: 40,
      height: 40,
    },
    sun: {
      content: <Sun />,
      width: 40,
      height: 40,
    },
    circleChros: {
      content: <CircleChros />,
      width: 100,
      height: 100,
    },
    arrowRight: {
      content: <ArrowRight color={color} />,
      width: 64,
      height: 54,
    },
    facebook: {
      content: <Facebook />,
      width: 190,
      height: 191,
    },
    instagram: {
      content: <Instagram />,
      width: 190,
      height: 191,
    },
    linkedin: {
      content: <LinkedIn />,
      width: 190,
      height: 191,
    },
    github: {
      content: <GitHub />,
      width: 190,
      height: 191,
    },
    react: {
      content: <React />,
      width: 204,
      height: 204,
    },
    reactLight: {
      content: <ReactLight />,
      width: 216,
      height: 216,
    },
    node: {
      content: <Node />,
      width: 204,
      height: 204,
    },
    nodeLight: {
      content: <NodeLight />,
      width: 216,
      height: 216,
    },
    next: {
      content: <Next />,
      width: 204,
      height: 204,
    },
    nextLight: {
      content: <NextLight />,
      width: 216,
      height: 216,
    },
    mongodb: {
      content: <MongoDB />,
      width: 204,
      height: 204,
    },
    mongodbLight: {
      content: <MongoDBLight />,
      width: 216,
      height: 216,
    },
    firebase: {
      content: <Firebase />,
      width: 204,
      height: 204,
    },
    firebaseLight: {
      content: <FirebaseLight />,
      width: 216,
      height: 216,
    },
    aws: {
      content: <AWS />,
      width: 204,
      height: 204,
    },
    awsLight: {
      content: <AWSLight />,
      width: 216,
      height: 216,
    },
  };

  const icon = data[id];
  if (!icon) {
    return null;
  }

  return (
    <Wrapper width={width || icon.width} height={height || icon.height}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${icon.width} ${icon.height}`}
      >
        {icon.content}
      </svg>
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
