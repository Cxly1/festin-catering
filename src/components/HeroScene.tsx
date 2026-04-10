"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Cloche() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -0.2, 0]}>
        {/* Plate base */}
        <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.8, 1.9, 0.08, 64]} />
          <meshStandardMaterial
            color="#D4A853"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Plate rim */}
        <mesh position={[0, -0.45, 0]}>
          <torusGeometry args={[1.85, 0.05, 16, 64]} />
          <meshStandardMaterial
            color="#E8C97A"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>

        {/* Cloche dome */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[1.4, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#C0C0C0"
            metalness={0.95}
            roughness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Cloche handle */}
        <mesh position={[0, 0.95, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#D4A853"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Handle stem */}
        <mesh position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 0.3, 16]} />
          <meshStandardMaterial
            color="#D4A853"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

function GoldenParticles() {
  const count = 80;
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
        ],
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        scale: 0.02 + Math.random() * 0.04,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const dummy = new THREE.Object3D();
    particles.forEach((p, i) => {
      const t = state.clock.elapsedTime;
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed + p.offset) * 0.5,
        p.position[1] + Math.cos(t * p.speed + p.offset) * 0.3,
        p.position[2]
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#D4A853"
        emissive="#D4A853"
        emissiveIntensity={2}
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#F5F5F5" />
        <directionalLight position={[-3, 3, -3]} intensity={0.5} color="#D4A853" />
        <spotLight
          position={[0, 5, 0]}
          intensity={1.5}
          angle={0.4}
          penumbra={0.5}
          color="#E8C97A"
        />
        <Cloche />
        <GoldenParticles />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
