import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface TorusProps {
  position: any;
  size?: any;
  color?: string;
}

export const Torus = ({ position, size, color = "orange" }: TorusProps) => {
  const ref = useRef();

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
