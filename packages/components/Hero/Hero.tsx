import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useDarkMode } from '@lib/dark-mode';
import TypeSriptCube from './Cubes/TypeSript/TypeSriptCube';
import JavaScriptCube from './Cubes/JavaScript/JsCube';
import Text from './Text/Text';
import SpinningBox from './SpinningBox';
import Stars from './Stars';
import styled from 'styled-components';
import Lottie from '@components/Lottie';
import { useState } from 'react';
import Icon from '@components/Icon';

const Hero: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();
  const [play, setPlay] = useState(false);

  return (
    <>
      <Canvas shadows flat camera={{ position: [-5, 2, 10], fov: 80 }}>
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[0, 20, 0]}
          intensity={1}
          shadowMapHeight={1024}
          shadowMapWidth={1024}
          shadowCameraFar={50}
          shadowCameraLeft={-10}
          shadowCameraRight={10}
          shadowCameraTop={10}
          shadowCameraBottom={-10}
        />

        <pointLight position={[-10, 10, -20]} intensity={0.4} />
        <pointLight position={[0, -10, -10]} intensity={0.2} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -20, 0]}
          >
            {darkMode ? (
              <></>
            ) : (
              <>
                <planeBufferGeometry attach="geometry" args={[150, 150]} />
                <shadowMaterial attach="material" opacity={0.2} />
              </>
            )}
          </mesh>

          {/* Rendering the Stars here */}
          {darkMode && <Stars pointCount={6000} />}

          {/* Text */}
          {/* <Text /> */}

          {/* Typsecript cubeb */}
          <SpinningBox position={[-15, -15, -30]}>
            <TypeSriptCube />
          </SpinningBox>

          {/* Javascrip cubeb */}
          <SpinningBox front speed={10} position={[30, 5, -15]}>
            <JavaScriptCube />
          </SpinningBox>
        </group>

        {/* Mouse & Scroll control of the scene */}
        {play && <OrbitControls />}
      </Canvas>

      <LottieContaier onClick={() => setPlay(!play)}>
        {play ? (
          <CloseContaier>
            <Icon id="circleChros" height={50} width={50} />
          </CloseContaier>
        ) : (
          <Lottie id="play" height={100} width={100} />
        )}
      </LottieContaier>
    </>
  );
};

export default Hero;

const LottieContaier = styled.div`
  position: absolute;
  bottom: 10px;
`;

const CloseContaier = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
