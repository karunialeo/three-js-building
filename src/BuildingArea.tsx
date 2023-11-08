import { Terrain } from "./Terrain";
import { Building } from "./Building";
import Walls from "./Walls";

export const BuildingArea = () => {
  return (
    <group position={[6, 0, 0]}>
      <Terrain position={[0, 0, 0]} color={"#87d864"} size={[90, 0.2, 40]} />

      <Terrain position={[-1, 0, 0]} color={"#e5d9c2"} size={[81, 0.4, 8]} />

      {/* TOP BUILDINGS */}
      <Building position={[-18, 0.6, -15]} color={"#fff68e"} />
      <Building position={[18, 0.6, -15]} color={"#fff68e"} />

      {/* CENTER BUILDINGS */}
      <Building position={[0, 0.6, -4.5]} color={"#fff68e"} />
      <Building position={[0, 0.6, 4.5]} color={"#fff68e"} />

      {/* LEFT CENTER BUILDING */}
      <Building
        position={[-43, 0.6, 0]}
        color={"#fff68e"}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* RIGHT CENTER BUILDING */}
      <Building
        position={[38, 0.6, 0]}
        color={"#fff68e"}
        rotation={[0, Math.PI / -2, 0]}
      />

      {/* BOTTOM BUILDINGS */}
      <Building position={[-18, 0.6, 15]} color={"#fff68e"} />
      <Building position={[18, 0.6, 15]} color={"#fff68e"} />

      <Walls />
    </group>
  );
};
