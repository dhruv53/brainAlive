import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import WorldComp from "./WorldComp";
import { BakeShadows, Stage } from "@react-three/drei";

function World() {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "50vh",
        backgroundSize: "cover",
      }}
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 500], fov: 35 }}
    >
      <directionalLight intensity={3} />

      <Suspense fallback={null}>
        <Stage
          environment="city"
          intensity={0.5}
          contactShadowOpacity={0.6}
          contactShadowBlur={1}
        >
          <WorldComp position={[0, 0, 0]} />
        </Stage>
        <BakeShadows />
      </Suspense>
    </Canvas>
  );
}

export default World;
