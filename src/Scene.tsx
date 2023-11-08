import { Terrain } from "./Terrain";
import { OrbitControls } from "@react-three/drei";
import { BuildingArea } from "./BuildingArea";
import { GateArea } from "./GateArea";

export const Scene = () => {
  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        intensity={3}
        // ref={directionalLightRef}
        color={"white"}
      />
      <ambientLight intensity={0.5} />

      <Terrain
        position={[0, -0.2, 0]}
        color={"#e5d9c2"}
        size={[110, 0.2, 50]}
      />

      <GateArea />

      <BuildingArea />

      <OrbitControls />
    </>
  );
};
