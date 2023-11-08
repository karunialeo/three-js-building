import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

interface SphereProps {
  position: any;
  size?: any;
  color?: string;
}

export const Sphere = ({ position, size, color = "orange" }: SphereProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const ref = useRef();

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked((prev) => !prev)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? color : "lightblue"} wireframe />
    </mesh>
  );
};
