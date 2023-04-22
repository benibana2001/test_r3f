import { useAnimations, useGLTF } from "@react-three/drei";
// import { useEffect } from "react";

export default function Room() {
  const fox = useGLTF("./RoomCompressed.glb");
  const animations = useAnimations(fox.animations, fox.scene);

  // useEffect(() => {
  //   animations.actions["HeartAction"].reset().fadeIn(0.5).play();
  //   animations.actions["SmallHeart01Action"].reset().fadeIn(0.5).play();
  //   animations.actions["SmallHeart02Action"].reset().fadeIn(0.5).play();
  // }, []);

  return (
    <primitive
      object={fox.scene}
      scale={0.5}
      position={[0, 0, 0]}
      position-y={-1.0}
    />
  );
}
