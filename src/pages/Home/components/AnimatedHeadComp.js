import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/animatedHeadComp.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_USB_COVER_V2_15DEC21-1"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_USB_COVER_V2_15DEC21-1"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_USB_COVER_V2_15DEC21-1"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_RUBBER_V2_15DEC21-1"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_RUBBER_V2_15DEC21-1"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_RUBBER_V2_15DEC21-1"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_FORNT_COVER_V2_15DEC"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_FORNT_COVER_V2_15DEC"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_FORNT_COVER_V2_15DEC"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_PCB_ASSY_OPB_V2_15D008"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_PCB_ASSY_OPB_V2_15D008"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_PCB_ASSY_OPB_V2_15D008"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_MIDDLE_COVER_V2_15DEC21"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_MIDDLE_COVER_V2_15DEC21"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_MIDDLE_COVER_V2_15DEC21"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LIGHT_PIPE_V2_15DEC21-1"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LIGHT_PIPE_V2_15DEC21-1"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LIGHT_PIPE_V2_15DEC21-1"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LH_RUBBER_V2_15DEC21-1"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LH_RUBBER_V2_15DEC21-1"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LH_RUBBER_V2_15DEC21-1"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-2"
        geometry={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-2"]
            .geometry
        }
        material={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-2"]
            .material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-1"
        geometry={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-1"]
            .geometry
        }
        material={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-1"]
            .material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03DEC2"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03DEC2"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03DEC2"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03"
        geometry={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03"]
            .geometry
        }
        material={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03"]
            .material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03002"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03002"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03002"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_POWER_BUTON_V2_15DEC21-"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_POWER_BUTON_V2_15DEC21-"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_POWER_BUTON_V2_15DEC21-"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        name="EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_REAR_COVER_V2_15DEC21-1"
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_REAR_COVER_V2_15DEC21-1"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_REAR_COVER_V2_15DEC21-1"
          ].material
        }
        position={[0, -1.88, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
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

useGLTF.preload("/animatedHeadComp.glb");
