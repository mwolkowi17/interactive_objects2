import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
      />
     {/*<mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials['Material.002']}
  />*/}
    </group>
  )
}

useGLTF.preload('/scene1.gltf')