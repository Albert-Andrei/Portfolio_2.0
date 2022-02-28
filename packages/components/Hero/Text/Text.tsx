import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export interface TextProps {
  text?: String;
}

const Textio: React.FC<TextProps> = ({ text }: TextProps) => {
  const mesh = useRef(null);

  // useFrame(() => {
  //   mesh.current.rotation.x += 0.01;
  //   mesh.current.rotation.y += 0.01;
  //   mesh.current.rotation.z += 0.01;
  //   mesh.current.geometry.center();
  // });

  // configure font geometry
  const textOptions = {
    size: 10,
    height: 1,
  };

  return (
    <mesh position={[0, 0, -10]} ref={mesh}>
      {/* <textGeometry attach="geometry" args={'Hi there', textOptions]} /> */}
      <meshBasicMaterial attach="material" />
    </mesh>
  );
};

export default Textio;
