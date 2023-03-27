import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  RoundedBox
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cube = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const faces = [
    { position: [0, 0, 1], rotation: [0, 0, 0] },
    { position: [0, 0, -1], rotation: [0, Math.PI, 0] },
    { position: [1, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { position: [-1, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    { position: [0, 1, 0], rotation: [Math.PI / 2, 0, 0] },
    { position: [0, -1, 0], rotation: [-Math.PI / 2, 0, 0] },
  ];

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#fadb00"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {faces.map((face, index) => (
          <Decal
            key={index}
            position={face.position}
            rotation={face.rotation}
            flatShading
            map={decal}
          />
        ))}
      </mesh>
    </Float>
  );
};

const CubeCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Cube imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;
