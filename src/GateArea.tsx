import { Terrain } from "./Terrain";
import { Building } from "./Building";

export const GateArea = () => {
  return (
    <group position={[-43, 0, 0]}>
      <Building
        size="small"
        position={[-6, 0.6, -14]}
        color={"#fff68e"}
        rotation="left"
      />
      <Terrain position={[-3, 0, -14]} color={"#8c6310"} size={[2, 0.2, 4]} />

      <Building
        size="medium"
        position={[-6, 0.6, 0]}
        color={"#fff68e"}
        rotation="left"
      />

      <Building
        size="small"
        position={[-6, 0.6, 14]}
        color={"#fff68e"}
        rotation="left"
      />
      <Terrain position={[-9, 0, 14]} color={"#8c6310"} size={[2, 0.2, 4]} />

      <Terrain position={[0, 0, 0]} color={"#87d864"} size={[8, 0.2, 4]} />
    </group>
  );
};
