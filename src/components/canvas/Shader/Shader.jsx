import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Sphere, useTexture } from '@react-three/drei'
import { LayerMaterial, Base, Depth, Fresnel, Texture, Noise } from 'lamina'

export default function Shader() {
  const targetRef = useRef()
  const texture = useTexture(['/img/clouds.png', '/img/volcanic.png'])
  useFrame(({ clock }) => {
    targetRef.current.rotation.x = Math.sin(clock.getElapsedTime())
    targetRef.current.rotation.y = clock.getElapsedTime()
    targetRef.current.rotation.x / 0.1
    targetRef.current.rotation.y / 0.1
  })

  return (
    <>
      <Suspense fallback={null}>
        <Stars />
        <Sphere ref={targetRef}>
          <ambientLight intensity={1} />
          <pointLight position={[100, 100, 100]} />
          <LayerMaterial>
            <Base color='#D33CE7' valpha={1} mode='normal' />
            <Noise colorA='#5B2CCB' colorB='#000000' alpha={1} mode='lighten' />
            <Texture map={texture[0]} alpha={0.75} />
            <Texture map={texture[1]} alpha={0.5} />
          </LayerMaterial>
        </Sphere>
      </Suspense>
    </>
  )
}
