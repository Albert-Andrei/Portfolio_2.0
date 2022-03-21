import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/models/TypeScriptCube.glb')

  return (
    <group castShadow ref={group} {...props} dispose={null} scale={[0.7, 0.7, 0.7]}>
      <mesh
        geometry={nodes['3D_Front_-_T'].geometry}
        material={nodes['3D_Front_-_T'].material}
        position={[-0.86, 0.62, 4.87]}
        rotation={[-1.54, -0.38, -0.06]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Front_-_S'].geometry}
        material={nodes['3D_Front_-_S'].material}
        position={[1.46, 1.53, 5.04]}
        rotation={[-1.54, -0.38, -0.06]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Top_-_T'].geometry}
        material={nodes['3D_Top_-_T'].material}
        position={[-4.04, 8.84, 3.93]}
        rotation={[-3.09, 0.05, -0.38]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Top_-_S'].geometry}
        material={nodes['3D_Top_-_S'].material}
        position={[-1.72, 9.76, 4.1]}
        rotation={[-3.09, 0.05, -0.38]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Left_-_T'].geometry}
        material={nodes['3D_Left_-_T'].material}
        position={[-4.14, -0.5, -1.4]}
        rotation={[-1.54, -0.38, -1.63]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Left_-_S'].geometry}
        material={nodes['3D_Left_-_S'].material}
        position={[-4.28, -0.63, 1.09]}
        rotation={[-1.54, -0.38, -1.63]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Right_-_T'].geometry}
        material={nodes['3D_Right_-_T'].material}
        position={[4.92, 3.02, 1.45]}
        rotation={[-1.54, -0.38, 1.51]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Right_-_S'].geometry}
        material={nodes['3D_Right_-_S'].material}
        position={[5.06, 3.14, -1.04]}
        rotation={[-1.54, -0.38, 1.51]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Back_-_T'].geometry}
        material={nodes['3D_Back_-_T'].material}
        position={[1.78, 1.95, -4.85]}
        rotation={[-1.54, -0.38, 3.08]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Back_-_S'].geometry}
        material={nodes['3D_Back_-_S'].material}
        position={[-0.54, 1.03, -5.02]}
        rotation={[-1.54, -0.38, 3.08]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_T'].geometry}
        material={nodes['3D_Bottom_-_T'].material}
        position={[1.7, 0.51, 3.93]}
        rotation={[-3.09, 0.05, 2.76]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_S'].geometry}
        material={nodes['3D_Bottom_-_S'].material}
        position={[-0.63, -0.4, 3.75]}
        rotation={[-3.09, 0.05, 2.76]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        castShadow
        geometry={nodes.Box.geometry}
        material={materials.Garfield}
        position={[0.83, 0.2, -0.06]}
        rotation={[-1.54, -0.38, -0.06]}
        scale={[0.1, 0.1, 0.1]}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/TypeScriptCube.glb')
