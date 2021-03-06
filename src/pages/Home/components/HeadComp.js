/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
const state = proxy({
  current: null,
  items: {
    cvr: "black",
  },
});
export default function Model({ ...props }) {
  const group = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials, animations } = useGLTF("/headComp.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="usb"
        geometry={nodes.usb.geometry}
        material={nodes.usb.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="rubber2"
        geometry={nodes.rubber2.geometry}
        material={nodes.rubber2.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="electrodeHolder"
        geometry={nodes.electrodeHolder.geometry}
        material={nodes.electrodeHolder.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="fNirs"
        geometry={nodes.fNirs.geometry}
        material={nodes.fNirs.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="bottomCoverBack"
        geometry={nodes.bottomCoverBack.geometry}
        material={nodes.bottomCoverBack.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="led"
        geometry={nodes.led.geometry}
        material={nodes.led.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="rubber1"
        geometry={nodes.rubber1.geometry}
        material={nodes.rubber1.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="electrode2"
        geometry={nodes.electrode2.geometry}
        material={nodes.electrode2.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="electrode1"
        geometry={nodes.electrode1.geometry}
        material={nodes.electrode1.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="cover3"
        geometry={nodes.cover3.geometry}
        material={nodes.cover3.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="cover2"
        geometry={nodes.cover2.geometry}
        material-color={snap.items.cvr}
        material={nodes.cover2.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="electrode3"
        geometry={nodes.electrode3.geometry}
        material-color={snap.items.cvr}
        material={nodes.electrode3.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="strip"
        geometry={nodes.strip.geometry}
        material-color={snap.items.cvr}
        material={materials["Material.003"]}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="cover"
        geometry={nodes.cover.geometry}
        material={nodes.cover.material}
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
        material-color={snap.items.cvr}
      />
      <mesh
        geometry={nodes.logo.geometry}
        material={materials.logo}
        position={[-0.6, 0.36, 3.23]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.55}
      />
    </group>
  );
}

useGLTF.preload("/headComp.glb");
