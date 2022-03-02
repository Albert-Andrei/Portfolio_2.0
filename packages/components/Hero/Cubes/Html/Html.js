import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/models/Html.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['3D_Text_2_-_H'].geometry}
        material={nodes['3D_Text_2_-_H'].material}
        position={[-2.97, 4.04, -1.91]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_T'].geometry}
        material={nodes['3D_Text_2_-_T'].material}
        position={[-2.97, 4.04, -0.83]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_M'].geometry}
        material={nodes['3D_Text_2_-_M'].material}
        position={[-2.97, 4.04, 0.09]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_2_-_L'].geometry}
        material={nodes['3D_Text_2_-_L'].material}
        position={[-2.97, 4.04, 1.42]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_3_-_5'].geometry}
        material={materials['Perfect Tint 1']}
        position={[-2.97, 0.97, -0.94]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.08, 0.01, 0.07]}
      />
      <mesh
        geometry={nodes['3D_Text_4_-_H'].geometry}
        material={nodes['3D_Text_4_-_H'].material}
        position={[2.96, 4.04, 2.07]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_4_-_T'].geometry}
        material={nodes['3D_Text_4_-_T'].material}
        position={[2.96, 4.04, 0.99]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_4_-_M'].geometry}
        material={nodes['3D_Text_4_-_M'].material}
        position={[2.96, 4.04, 0.07]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_4_-_L'].geometry}
        material={nodes['3D_Text_4_-_L'].material}
        position={[2.96, 4.04, -1.26]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_5_-_5'].geometry}
        material={materials['Perfect Tint 7']}
        position={[2.96, 0.97, 1.1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.08, 0.01, 0.07]}
      />
      <mesh
        geometry={nodes['3D_Text_6_-_H'].geometry}
        material={nodes['3D_Text_6_-_H'].material}
        position={[-1.9, 4.04, 2.96]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_6_-_T'].geometry}
        material={nodes['3D_Text_6_-_T'].material}
        position={[-0.82, 4.04, 2.96]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_6_-_M'].geometry}
        material={nodes['3D_Text_6_-_M'].material}
        position={[0.1, 4.04, 2.96]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_6_-_L'].geometry}
        material={nodes['3D_Text_6_-_L'].material}
        position={[1.43, 4.04, 2.96]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_7_-_5'].geometry}
        material={materials['Perfect Tint 3']}
        position={[-0.93, 0.97, 2.96]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.08, 0.01, 0.07]}
      />
      <mesh
        geometry={nodes['3D_Text_8_-_H'].geometry}
        material={nodes['3D_Text_8_-_H'].material}
        position={[2.1, 4.04, -2.96]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_8_-_T'].geometry}
        material={nodes['3D_Text_8_-_T'].material}
        position={[1.02, 4.04, -2.96]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_8_-_M'].geometry}
        material={nodes['3D_Text_8_-_M'].material}
        position={[0.1, 4.04, -2.96]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_8_-_L'].geometry}
        material={nodes['3D_Text_8_-_L'].material}
        position={[-1.23, 4.04, -2.96]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_9_-_5'].geometry}
        material={materials['Perfect Tint 5']}
        position={[1.13, 0.97, -2.96]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.08, 0.01, 0.07]}
      />
      <mesh
        geometry={nodes['3D_Text_10_-_H'].geometry}
        material={nodes['3D_Text_10_-_H'].material}
        position={[2.1, 0.03, -1.11]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_10_-_T'].geometry}
        material={nodes['3D_Text_10_-_T'].material}
        position={[1.02, 0.03, -1.11]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_10_-_M'].geometry}
        material={nodes['3D_Text_10_-_M'].material}
        position={[0.1, 0.03, -1.11]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_10_-_L'].geometry}
        material={nodes['3D_Text_10_-_L'].material}
        position={[-1.23, 0.03, -1.11]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_11_-_5'].geometry}
        material={materials['Perfect Tint 11']}
        position={[1.13, 0.03, 1.96]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.08, 0.01, 0.07]}
      />
      <mesh
        geometry={nodes['3D_Text_-_H'].geometry}
        material={nodes['3D_Text_-_H'].material}
        position={[2.1, 5.95, 1.08]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_T'].geometry}
        material={nodes['3D_Text_-_T'].material}
        position={[1.02, 5.95, 1.08]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_M'].geometry}
        material={nodes['3D_Text_-_M'].material}
        position={[0.1, 5.95, 1.08]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_-_L'].geometry}
        material={nodes['3D_Text_-_L'].material}
        position={[-1.23, 5.95, 1.08]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        geometry={nodes['3D_Text_1_-_5'].geometry}
        material={materials['Perfect Tint 9']}
        position={[1.13, 5.95, -1.99]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.08, 0.01, 0.07]}
      />
      <mesh
        geometry={nodes.Box.geometry}
        material={materials['Warm Welcome']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.06}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/Html.glb')
