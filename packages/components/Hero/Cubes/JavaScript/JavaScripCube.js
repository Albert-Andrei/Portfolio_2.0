/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/models/JsCube.glb')
  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['3D_Fromt_-_J'].geometry}
        material={nodes['3D_Fromt_-_J'].material}
        position={[-1.05, 0.45, 2.42]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Fromt_-_S'].geometry}
        material={nodes['3D_Fromt_-_S'].material}
        position={[0.44, 0.45, 2.42]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Top_-_J'].geometry}
        material={nodes['3D_Top_-_J'].material}
        position={[-1.05, 4.95, 2.04]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Top_-_S'].geometry}
        material={nodes['3D_Top_-_S'].material}
        position={[0.44, 4.95, 2.04]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_J'].geometry}
        material={nodes['3D_Bottom_-_J'].material}
        position={[1.17, 0.05, 2.05]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_S'].geometry}
        material={nodes['3D_Bottom_-_S'].material}
        position={[-0.33, 0.05, 2.05]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Left_-_J'].geometry}
        material={nodes['3D_Left_-_J'].material}
        position={[-2.46, 0.45, -1.12]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Left_-_S'].geometry}
        material={nodes['3D_Left_-_S'].material}
        position={[-2.46, 0.45, 0.37]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Right_-_J'].geometry}
        material={nodes['3D_Right_-_J'].material}
        position={[2.47, 0.45, 1.1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Right_-_S'].geometry}
        material={nodes['3D_Right_-_S'].material}
        position={[2.47, 0.45, -0.39]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh geometry={nodes.Box.geometry} material={materials.Eternity} rotation={[-Math.PI / 2, 0, 0]} scale={0.05} />
      <mesh
        geometry={nodes['3D_Back_-_J'].geometry}
        material={nodes['3D_Back_-_J'].material}
        position={[1.17, 0.45, -2.46]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[0.06, 0.01, 0.06]}
      />
      <mesh
        geometry={nodes['3D_Back_-_S'].geometry}
        material={nodes['3D_Back_-_S'].material}
        position={[-0.33, 0.45, -2.46]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[0.06, 0.01, 0.06]}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/JsCube.glb')

