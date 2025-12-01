// src/Pages/GardenPage.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/virtualGarden.glb");  // Ensure this file is in the public folder
  return <primitive object={scene} {...props} />;
}

function GardenPage() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Overlay Instructions */}
      <div style={{
        position: "absolute",
        top: "80px", // Below navbar
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "20px",
        pointerEvents: "none",
        textAlign: "center"
      }}>
        <h3>Virtual Herbal Garden</h3>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>Drag to rotate • Scroll to zoom</p>
      </div>

      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"sunset"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default GardenPage;
