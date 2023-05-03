import { useTexture, useAnimations, useGLTF, Center } from "@react-three/drei";
import { useEffect } from "react";

export default function TowerPc() {
  const TowerPc = useGLTF("./TowerPc.glb");
  const { nodes, material } = useGLTF("./TowerPc.glb")

  const bakedTexture = useTexture("./TowerPcBaked.jpg")
  bakedTexture.flipY = false

  return (
    <Center>
      <TreeNode children={nodes.Scene.children} texture={bakedTexture}></TreeNode>
    </Center>
  );
}

function TreeNode({children, texture}) {
  const hasGeometry = (child) => (child.type === "Mesh" && child.geometry)
  const hasChildren = (child) => (child.children && child.children.length > 0)

  return (
    <>
      {children.map((child, index) => (
        <mesh key={index} geometry={child.geometry} position={child.position}>

          {hasGeometry(child) &&(
            <meshBasicMaterial map={texture} />
          )}

          {hasChildren &&
            <TreeNode children={child.children} texture={texture} />
          }
        </mesh>
      ))}
    </>
  );
}
