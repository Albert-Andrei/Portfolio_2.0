import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshWobbleMaterial } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/models/TsCube.glb')
  return (
    <group castShadow ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['3D_Front_-_T'].geometry}
        material={nodes['3D_Front_-_T'].material}
        position={[-1.08, 1.15, 4.9]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Front_-_S'].geometry}
        material={nodes['3D_Front_-_S'].material}
        position={[1.42, 1.15, 4.9]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Top_-_T'].geometry}
        material={nodes['3D_Top_-_T'].material}
        position={[-1.08, 9.82, 3.8]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Top_-_S'].geometry}
        material={nodes['3D_Top_-_S'].material}
        position={[1.42, 9.82, 3.8]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Left_-_T'].geometry}
        material={nodes['3D_Left_-_T'].material}
        position={[-4.91, 1.15, -1.04]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Left_-_S'].geometry}
        material={nodes['3D_Left_-_S'].material}
        position={[-4.91, 1.15, 1.46]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Right_-_T'].geometry}
        material={nodes['3D_Right_-_T'].material}
        position={[4.9, 1.15, 1.14]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Right_-_S'].geometry}
        material={nodes['3D_Right_-_S'].material}
        position={[4.9, 1.15, -1.36]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Back_-_T'].geometry}
        material={nodes['3D_Back_-_T'].material}
        position={[1.19, 1.15, -4.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Back_-_S'].geometry}
        material={nodes['3D_Back_-_S'].material}
        position={[-1.31, 1.15, -4.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_T'].geometry}
        material={nodes['3D_Bottom_-_T'].material}
        position={[1.19, 0.12, 3.91]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh
        geometry={nodes['3D_Bottom_-_S'].geometry}
        material={nodes['3D_Bottom_-_S'].material}
        position={[-1.31, 0.12, 3.91]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[0.09, 0.01, 0.1]}
      />
      <mesh geometry={nodes.Box.geometry} material={materials.Garfield} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/assets/models/TsCube.glb')
