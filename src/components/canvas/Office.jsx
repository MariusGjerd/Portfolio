import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Avatar = ({ isMobile }) => {
  const avatar = useGLTF("./me3d/marius3dd.glb");

  return (
    <mesh receiveShadow>
      <hemisphereLight intensity={0.6} />
      <directionalLight
        position={[0, -10, 5]}
        intensity={0.7}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive
        object={avatar.scene}
        scale={isMobile ? 0.7 : 1.3}
        position={[0, -3, -2]}
        rotation={[-0.025, 0, 0]}
        castShadow
      />
      <Environment preset="city" />
    </mesh>
  );
};

const AvatarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          target={[0, -1.2, -1]}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Avatar isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;
