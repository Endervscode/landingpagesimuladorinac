"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Aircraft() {
  const aircraftRef = useRef<Group>(null);

  useFrame((state) => {
    if (!aircraftRef.current) return;

    aircraftRef.current.rotation.z =
      -0.17 + Math.sin(state.clock.elapsedTime * 0.55) * 0.025;
    aircraftRef.current.rotation.y =
      -0.3 + Math.sin(state.clock.elapsedTime * 0.35) * 0.04;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.25}>
      <group
        ref={aircraftRef}
        position={[0, 0, 0]}
        rotation={[0.08, -0.3, -0.17]}
        scale={0.95}
      >
        <mesh>
          <capsuleGeometry args={[0.22, 3.2, 12, 24]} />
          <meshStandardMaterial
            color="#dfe9ef"
            roughness={0.3}
            metalness={0.65}
          />
        </mesh>

        <mesh position={[0, 0.08, 0.35]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.12, 4.3, 0.72]} />
          <meshStandardMaterial
            color="#f4f8fa"
            roughness={0.25}
            metalness={0.6}
          />
        </mesh>

        <mesh position={[0, -1.42, 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.1, 1.7, 0.38]} />
          <meshStandardMaterial color="#dfe9ef" metalness={0.55} />
        </mesh>

        <mesh position={[0, -1.56, 0.36]}>
          <boxGeometry args={[0.08, 0.55, 0.8]} />
          <meshStandardMaterial color="#dfe9ef" metalness={0.55} />
        </mesh>

        <mesh position={[0, 1.64, 0.12]}>
          <sphereGeometry args={[0.2, 20, 20]} />
          <meshStandardMaterial color="#f4f8fa" metalness={0.6} />
        </mesh>

        <mesh position={[0, 0.5, 0.59]}>
          <boxGeometry args={[0.19, 1.15, 0.03]} />
          <meshStandardMaterial
            color="#0c8092"
            emissive="#084b5a"
            emissiveIntensity={0.4}
          />
        </mesh>

        <mesh position={[-0.05, 0.2, 0.8]}>
          <boxGeometry args={[0.08, 4.1, 0.08]} />
          <meshStandardMaterial color="#ffb657" emissive="#8b4b12" />
        </mesh>
      </group>
    </Float>
  );
}

export function AircraftScene() {
  return (
    <div className="aircraft-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.1, 6.6], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.7} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={3}
          color="#ffffff"
        />
        <pointLight
          position={[-4, -2, 2]}
          intensity={2}
          color="#55dbe8"
        />
        <Aircraft />
      </Canvas>
    </div>
  );
}
