// import { useRef } from "react";

interface BuildingProps {
  position: any;
  color?: string;
  rotation?: any;
  size?: string;
}

export const Building = ({
  position,
  color = "orange",
  rotation = [0, 0, 0],
  size = "large",
}: BuildingProps) => {
  const getBuildingLength = () => {
    let length;

    switch (size) {
      case "large":
        length = 18.4;
        break;
      case "medium":
        length = 12;
        break;
      case "small":
        length = 7;
        break;
      default:
        length = 18.4;
    }

    return length;
  };

  const getSidePosition = () => {
    let length;

    switch (size) {
      case "large":
        length = 9.35;
        break;
      case "medium":
        length = 6;
        break;
      case "small":
        length = 3.5;
        break;
      default:
        length = 9.35;
    }

    return length;
  };

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
        <boxGeometry args={[getBuildingLength(), 0.3, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* REAR */}
      <mesh position={[0, 1, -1.85]}>
        <boxGeometry args={[getBuildingLength(), 3, 0.3]} />
        <meshStandardMaterial
          attach="material"
          color={color}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* FRONT */}
      <mesh position={[0, 1, 1.85]}>
        <boxGeometry args={[getBuildingLength(), 3, 0.3]} />
        <meshStandardMaterial
          attach="material"
          color={color}
          transparent={true}
          opacity={0.2}
        />
      </mesh>

      {/* LEFT */}
      <mesh position={[getSidePosition() * -1, 1, 0]}>
        <boxGeometry args={[0.3, 3, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* RIGHT */}
      <mesh position={[getSidePosition(), 1, 0]}>
        <boxGeometry args={[0.3, 3, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};
