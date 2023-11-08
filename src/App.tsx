import * as THREE from "three";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Cube } from "./Terrain";
import { Sphere } from "./Sphere";
import { Torus } from "./Torus";
import { TorusKnot } from "./TorusKnot";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export default function App() {
  // Define the initial camera position to control the default zoom size
  const initialCameraPosition = [0, 35, 30]; // Adjust these values as needed

  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: initialCameraPosition }}
      onCreated={({ gl }) => {
        gl.setClearColor("#ffffff"); // Set the background color to white
      }}
    >
      <Scene />
    </Canvas>
  );
}
