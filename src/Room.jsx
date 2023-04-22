import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Room() {
  const room = useGLTF("./RoomCompressed.glb");
  const animations = useAnimations(room.animations, room.scene);

  useEffect(() => {
    console.log(animations.actions);
    animations.actions["ChairAction"].reset().fadeIn(0.5).play();
  }, []);

  return (
    <primitive
      object={room.scene}
      scale={0.5}
      position={[0, 0, 0]}
      position-y={-1.0}
    />
  );
}
