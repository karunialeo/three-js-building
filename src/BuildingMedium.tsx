// import { useRef } from "react";

interface BuildingProps {
  position: any;
  color?: string;
  rotation?: any;
}

export const BuildingMedium = ({
  position,
  color = "orange",
  rotation = [0, 0, 0],
}: BuildingProps) => {
  //   const ref = useRef();

  //   useFrame((state, delta) => {
  //     ref.current.rotation.x += delta;
  //     ref.current.rotation.y += delta;
  //     ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  //   });

  return (
    <group position={position} rotation={rotation}>
      {/* BASE */}
      <mesh position={[0, -0.35, 0]}>
        <boxGeometry args={[12, 0.3, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* REAR */}
      <mesh position={[0, 1, -1.85]}>
        <boxGeometry args={[12, 3, 0.3]} />
        <meshStandardMaterial
          attach="material"
          color={color}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* FRONT */}
      <mesh position={[0, 1, 1.85]}>
        <boxGeometry args={[12, 3, 0.3]} />
        <meshStandardMaterial
          attach="material"
          color={color}
          transparent={true}
          opacity={0.2}
        />
      </mesh>

      {/* LEFT */}
      <mesh position={[-6, 1, 0]}>
        <boxGeometry args={[0.3, 3, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* RIGHT */}
      <mesh position={[6, 1, 0]}>
        <boxGeometry args={[0.3, 3, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};
