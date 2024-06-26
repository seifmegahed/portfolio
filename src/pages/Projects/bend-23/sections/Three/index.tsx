import { Canvas } from "@react-three/fiber";
import { lazy } from "react";
import * as THREE from "three";
const Pedal = lazy(() => import("./Pedal3"));

const ThreeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ fov: 45, position: [0, 0, 25] }}
      onCreated={({ camera, gl }) => {
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        color="white"
        intensity={20}
        position={[500, 500, 2000]}
        lookAt={() => new THREE.Vector3(20, 0, 0)}
      />
      <Pedal
        rotation={[Math.PI * 0.5, 0, Math.PI * 0]}
        position={[0, 0.2, -4]}
      />
    </Canvas>
  );
};

export default ThreeCanvas;
