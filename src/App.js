
import React, {Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Field} from './Field'
import { OrbitControls } from '@react-three/drei'
import {Model1} from './Modeltest'
import {Roller1} from './Roller1'


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      
    </mesh>
  )
}
export default function App() {

  return (
    
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 3, 4.8] }}>
      <OrbitControls />
      <Suspense fallback={null}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      
      <Field position={[0,-1,-0.3]} rotation={[-Math.PI/2,0,0]} />
    
      <Roller1 position={[-2.82,-1,0.3]} scale={[0.023,0.023,0.023]} />
      </Suspense>
    </Canvas>
  )
}