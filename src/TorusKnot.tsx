import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

interface TorusKnotProps {
  position: any;
  size?: any;
}

export const TorusKnot = ({ position, size }: TorusKnotProps) => {
  const ref = useRef();

  const { color, radius } = useControls({
    color: "lightblue",
    radius: {
      value: 5,
      min: 1,
      max: 10,
      step: 0.5,
    },
  });

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  //   ref.current.rotation.y += delta * 2;
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  // });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[radius, ...size]} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial factor={5} speed={2} color={color} />
    </mesh>
  );
};
