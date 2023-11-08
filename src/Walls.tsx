const Walls = () => {
  return (
    <group>
      <mesh position={[0, 2, -20]}>
        <boxGeometry args={[90, 4, 0.3]} />
        <meshStandardMaterial
          attach="material"
          color={"#fff68e"}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
      <mesh position={[0, 2, 20]}>
        <boxGeometry args={[90, 4, 0.3]} />
        <meshStandardMaterial
          attach="material"
          color={"#fff68e"}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
      <mesh position={[44.8, 2, 0]}>
        <boxGeometry args={[0.3, 4, 40]} />
        <meshStandardMaterial
          attach="material"
          color={"#fff68e"}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
      <mesh position={[-44.8, 2, 0]}>
        <boxGeometry args={[0.3, 4, 40]} />
        <meshStandardMaterial
          attach="material"
          color={"#fff68e"}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    </group>
  );
};

export default Walls;
