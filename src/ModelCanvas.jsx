// // ModelCanvas.js
// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// // Component to load and display the .glb model
// const Model = () => {
//   const { scene } = useGLTF("/killer_beats_casette_mixstation.glb"); // Path to the .glb file

//   // Remove floor or unwanted background elements if any exist
//   scene.traverse((object) => {
//     if (object.isMesh && (object.name.includes("Floor") || object.name.includes("Background"))) {
//       object.visible = false; // Hide floor or background meshes
//     }
//   });

//   return <primitive object={scene} scale={0.13} />; // Smaller scale
// };

// const AutoRotate = () => {
//   const groupRef = useRef();

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.002; // Slow auto-rotation
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       <Model />
//     </group>
//   );
// };

// const ModelCanvas = () => {
//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Canvas
//         gl={{ alpha: true }} // Enable transparent background
//         style={{ background: "transparent" }} // Set the background as transparent
//       >
//         {/* Lighting */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <OrbitControls 
//           minDistance={1} // Minimum zoom distance
//           maxDistance={10} // Maximum zoom distance
//           dampingFactor={0.1} // Slow down rotation and panning
//           rotateSpeed={0.5} // Adjust rotation speed for smoothness
//         />
//         <AutoRotate />
//       </Canvas>
//     </div>
//   );
// };


// export default ModelCanvas;
