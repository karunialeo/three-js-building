interface CornerProps {
  position: any;
}

const Corner = ({ position }: CornerProps) => {
  let color = "#a5a5a5";

  return (
    <group position={position}>
      {/* BASE */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[2, 0.3, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* REAR */}
      <mesh position={[0, 0.5, -0.85]}>
        <boxGeometry args={[2, 2, 0.3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* FRONT */}
      <mesh position={[0, 0.5, 0.85]}>
        <boxGeometry args={[2, 2, 0.3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* LEFT */}
      <mesh position={[-0.85, 0.5, 0]}>
        <boxGeometry args={[0.3, 2, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* RIGHT */}
      <mesh position={[0.85, 0.5, 0]}>
        <boxGeometry args={[0.3, 2, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export default Corner;
