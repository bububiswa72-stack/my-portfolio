import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import "./Globe.css";

function Earth() {
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={earthRef}>
      {/* Main Earth */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />

        <meshStandardMaterial
          color="#071018"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Wireframe/details */}
      <mesh scale={1.003}>
        <sphereGeometry args={[2, 48, 48]} />

        <meshBasicMaterial
          color="#8be9f5"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh scale={1.04}>
        <sphereGeometry args={[2, 64, 64]} />

        <meshBasicMaterial
          color="#72e7ff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

export default function Globe() {
  return (
    <section className="globeSection">
      <div className="globeCanvas">
        <Canvas
          camera={{
            position: [0, 0, 6],
            fov: 45,
          }}
        >
          <ambientLight intensity={0.8} />

          <directionalLight
            position={[4, 3, 5]}
            intensity={3}
          />

          <pointLight
            position={[-4, 1, 3]}
            intensity={10}
            color="#61e7ff"
          />

          <Earth />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            rotateSpeed={0.5}
          />
        </Canvas>
      </div>
    </section>
  );
}