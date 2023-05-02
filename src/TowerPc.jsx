import { useTexture, useAnimations, useGLTF, Center } from "@react-three/drei";
import { useEffect } from "react";

export default function TowerPc() {
  const TowerPc = useGLTF("./TowerPc.glb");
  const { nodes, material } = useGLTF("./TowerPc.glb")

  const bakedTexture = useTexture("./TowerPcBaked.jpg")
  bakedTexture.flipY = false

  console.log(nodes)

  return (
    <Center>
      <TreeNode children={nodes.Scene.children} texture={bakedTexture}></TreeNode>
    </Center>
  );
}

function TreeNode({children, texture}) {
  console.log(children)

  return (
    <>
      {children.map((child, index) => (
        <mesh key={index} geometry={child.geometry} position={child.position}>

          {/* TypeがMeshの場合 */}
          {(child.type === "Mesh" && child.geometry) &&
            <meshBasicMaterial map={texture} />
          }
          { 
            console.log(child.name)
          }

          {/* Childrenを保有する場合 */}
          {(child.children && child.children.length > 0) &&
            <TreeNode children={child.children} />
          }
        </mesh>
      ))}
    </>
  );
}
