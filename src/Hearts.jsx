import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export default function Hearts() {
  const fox = useGLTF("./HeartsCompressed.glb");
  const animations = useAnimations(fox.animations, fox.scene);

  const { animationName } = useControls("Hearts", {
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play(); //リセットする必要あり

    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <primitive
      object={fox.scene}
      scale={0.5}
      position={[-5.5, 0, 2.5]}
      position-y={0.3}
    />
  );
}
