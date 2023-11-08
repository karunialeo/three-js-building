// import { useRef } from "react";

interface BuildingProps {
  position: any;
  color?: string;
  rotation?: string;
  size?: string;
}

export const Building = ({
  position,
  color = "orange",
  rotation = "normal",
  size = "large",
}: BuildingProps) => {
  const getRotation = () => {
    let rotate;

    switch (rotation) {
      case "normal":
        rotate = [0, 0, 0];
        break;
      case "left":
        rotate = [0, Math.PI / 2, 0];
        break;
      case "right":
        rotate = [0, Math.PI / -2, 0];
        break;
      default:
        rotate = [0, 0, 0];
    }

    return rotate;
  };

  const getBuildingLength = () => {
    let length;

    switch (size) {
      case "large":
        length = 18.4;
        break;
      case "medium":
        length = 15;
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
        length = 7.4;
        break;
      case "small":
        length = 3.5;
        break;
      default:
        length = 9.35;
    }

    return length;
  };

  return (
    <group position={position} rotation={getRotation()}>
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
