import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Model from "./Model";
import Placeholder from "./Placeholder";
import Hamburger from "./Hamburger";
import Fox from "./Fox";
import Hearts from "./Hearts";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04} // 不自然な影、「shadow acne」 をへらす
      />
      <ambientLight intensity={0.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      {/* lazy loading */}
      <Suspense
        fallback={<Placeholder position-rotateY={0.5} scale={[2, 3, 2]} />}
      >
        {/* <Model /> */}
        <Hamburger scale={0.35} />
        <Fox />
        <Hearts />
      </Suspense>
    </>
  );
}
