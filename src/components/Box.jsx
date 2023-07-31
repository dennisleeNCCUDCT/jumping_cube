import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
//import { useFrame } from '@react-three/fiber'
import { red } from 'react-color/lib/helpers/color'

const Box = (props) => {
  const ref = useRef()
  //
  useEffect(() => {
    console.log(ref.current)
  })

  //
  //useFrame((_, delta) => {
  //ref.current.rotation.x += 1 * delta
  //ref.current.rotation.y += 0.5 * delta
  // ref.current.position.z -= 0.5 * delta
  //
  // })
  //
  // useFrame(({ clock }) => {
  // ref.current.position.y = Math.sin(clock.getElapsedTime() * 5)
  // })
  //
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={(e) => (ref.current.position.y += 1)}
      onPointerUp={(e) => (ref.current.position.y -= 1)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}

export default Box
