import React, { useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export default function About() {
  return (
    <>
      <Navbar></Navbar>

      <Sidecontactbar />

      <div className="border-2 border-red-500 flex justify-center  flex-col space-y-4 items-center p-20">
        <div className="  rounded-full h-60 w-60 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1608237652484-b478fac3bf7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <p className="mb-2">
            As a Full-Stack Developer, I aspire nothing less than excellence and
            consistency. I am capable of delivering thoughtful, innovative
            solutions to clients and customers needs.
          </p>
          <p>
            Other than coding I love watching anime, playing games and going to
            music festivals.
          </p>
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <Canvas>
            <ambientLight className="bg-red-500" />
            <Box position={[0, 0, 0]} />
          </Canvas>
        </div>
      </div>
    </>
  );
}
