import { Terrain } from "./Terrain";
import { Building } from "./Building";
import Walls from "./Walls";
import Corner from "./Corner";

export const BuildingArea = () => {
  return (
    <group position={[6, 0, 0]}>
      <Terrain position={[0, 0, 0]} color={"#87d864"} size={[90, 0.2, 40]} />

      <Terrain position={[-1, 0, 0]} color={"#e5d9c2"} size={[81, 0.4, 6]} />

      <Corner position={[-43.7, 0.6, -18.85]} />
      <Corner position={[43.7, 0.6, -18.85]} />

      <Corner position={[-43.7, 0.6, 18.85]} />
      <Corner position={[43.7, 0.6, 18.85]} />

      {/* TOP BUILDINGS */}
      <Building position={[-20, 0.6, -15]} color={"#fff68e"} />
      <Building position={[20, 0.6, -15]} color={"#fff68e"} />
      <Building size="small" position={[26, 0.6, -8]} color={"#fff68e"} />

      {/* CENTER BUILDINGS */}
      <Building size="medium" position={[0, 0.6, -4.5]} color={"#fff68e"} />
      <Building size="medium" position={[0, 0.6, 4.5]} color={"#fff68e"} />

      {/* LEFT CENTER BUILDING */}
      <Building
        size="medium"
        position={[-43, 0.6, 0]}
        color={"#fff68e"}
        rotation="left"
      />

      {/* RIGHT CENTER BUILDING */}
      <Building
        size="medium"
        position={[38, 0.6, 0]}
        color={"#fff68e"}
        rotation="right"
      />

      {/* BOTTOM BUILDINGS */}
      <Building position={[-20, 0.6, 15]} color={"#fff68e"} />
      <Building position={[20, 0.6, 15]} color={"#fff68e"} />

      <Walls />
    </group>
  );
};
