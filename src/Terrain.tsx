import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface TerrainProps {
  position: any;
  size?: any;
  color?: string;
}

export const Terrain = ({ position, size, color = "orange" }: TerrainProps) => {
  const ref = useRef();

  useFrame((state, delta) => {
    // ref.current.rotation.y += delta * 0.2;
    // ref.current.rotation.y += delta * 2;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
