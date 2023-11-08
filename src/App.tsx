import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

export default function App() {
  // Define the initial camera position to control the default zoom size
  const initialCameraPosition = [0, 35, 30]; // Adjust these values as needed

  return (
    <main className="w-screen h-screen p-10 flex items-end justify-center bg-blue-950">
      <div className="w-full h-full">
        <Canvas
          gl={{ antialias: true }}
          camera={{ position: initialCameraPosition }}
          onCreated={({ gl }) => {
            gl.setClearColor("#ffffff"); // Set the background color to white
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </main>
  );
}
