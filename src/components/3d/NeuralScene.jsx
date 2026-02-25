import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function NeuralSphere({ mousePosition }) {
  const meshRef = useRef()
  const innerRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mousePosition.y * 0.5,
      0.05
    )
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mousePosition.x * 0.5 + state.clock.elapsedTime * 0.1,
      0.05
    )

    if (innerRef.current) {
      innerRef.current.rotation.x = state.clock.elapsedTime * 0.3
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={meshRef}>
        {/* Outer distorted sphere */}
        <Sphere args={[1.8, 64, 64]}>
          <MeshDistortMaterial
            color="#4f46e5"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.15}
            wireframe={false}
          />
        </Sphere>

        {/* Wireframe sphere */}
        <Sphere args={[1.82, 24, 24]}>
          <meshStandardMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>

        {/* Inner glowing core */}
        <Sphere ref={innerRef} args={[0.9, 32, 32]}>
          <MeshDistortMaterial
            color="#818cf8"
            distort={0.6}
            speed={3}
            roughness={0}
            metalness={1}
            transparent
            opacity={0.8}
            emissive="#4f46e5"
            emissiveIntensity={0.5}
          />
        </Sphere>

        {/* Energy ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.2, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={2}
            transparent
            opacity={0.7}
          />
        </mesh>

        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.0, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={2}
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingParticles() {
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  const pointsRef = useRef()

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#818cf8"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

export default function NeuralScene({ mousePosition }) {
  return (
    <>
      <ambientLight intensity={0.3} color="#4f46e5" />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#818cf8" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#22d3ee" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#6366f1" distance={10} />

      <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={1} />

      <NeuralSphere mousePosition={mousePosition} />
      <FloatingParticles />
    </>
  )
}
