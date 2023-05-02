import { Stage, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Placeholder from "./Placeholder";
import Room from "./Room";
import TowerPc from "./TowerPc";

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

      <ambientLight intensity={0.6} />

      <Suspense
        fallback={<Placeholder position-rotateY={0.5} scale={[4, 4, 4]} />}
      >
        <Room />
        {/* <TowerPc /> */}
      </Suspense>
    </>
  );
}
