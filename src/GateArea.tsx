import { Terrain } from "./Terrain";
import { BuildingSmall } from "./BuildingSmall";
import { BuildingMedium } from "./BuildingMedium";

export const GateArea = () => {
  return (
    <group position={[-43, 0, 0]}>
      <BuildingSmall
        position={[-6, 0.6, -14]}
        color={"#fff68e"}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Terrain position={[-3, 0, -14]} color={"#8c6310"} size={[2, 0.2, 4]} />

      <BuildingMedium
        position={[-6, 0.6, 0]}
        color={"#fff68e"}
        rotation={[0, Math.PI / 2, 0]}
      />

      <BuildingSmall
        position={[-6, 0.6, 14]}
        color={"#fff68e"}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Terrain position={[-3, 0, 14]} color={"#8c6310"} size={[2, 0.2, 4]} />

      <Terrain position={[0, 0, 0]} color={"#87d864"} size={[8, 0.2, 4]} />
    </group>
  );
};
