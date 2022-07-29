import React, { useRef, useState } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import styles from "../../styles/car/car.module.scss";

export default function Car(props) {
  const groupRef = useRef();
  const textRef = useRef();

  const { nodes, materials } = useGLTF("assets/models/beetle_old/scene.gltf");

  const [scale, setScale] = useState(3);
  const [rotation, setRotation] = useState(0)
  const [hoveredCarPart, setHoveredCarPart] = useState(null);

  const [pickedCarParts, setPickedCarParts] = useState({
    front: false,
    ceiling: false,
    bumpers: false,
    windows: false,
    hood: false,
    doors: false,
  });

  props.setPickedCarParts(pickedCarParts);

  const [colors, setColors] = useState({
    front: "#ffffff",
    ceiling: "#ffffff",
    bumpers: "#ffffff",
    windows: "#ffffff",
    hood: "#ffffff",
    doors: "#ffffff",
  });

  useFrame(({ camera }) => {
    
    textRef.current.quaternion.copy(camera.quaternion);
  });

  useFrame(() => {
    //setRotation(rotation + 0.005)
  });

  window.addEventListener("resize", () => {
    setScale(scale - 0.0001);
  });

  const meshClicked = (e) => {
    switch (e.object.material.name) {
      case "ceiling/back": {
        setPickedCarParts((pickedCarParts) => ({
          ...pickedCarParts,
          ceiling: true,
        }));
        if (props.carColor) {
          setColors((colors) => ({
            ...colors,
            ceiling: props.carColor,
          }));
        }
        break;
      }

      case "front": {
        setPickedCarParts((pickedCarParts) => ({
          ...pickedCarParts,
          front: true,
        }));
        if (props.carColor) {
          setColors((colors) => ({
            ...colors,
            front: props.carColor,
          }));
        }
        break;
      }

      case "bumpers/lights": {
        setPickedCarParts((pickedCarParts) => ({
          ...pickedCarParts,
          bumpers: true,
        }));
        if (props.carColor) {
          setColors((colors) => ({
            ...colors,
            bumpers: props.carColor,
          }));
        }
        break;
      }

      case "windows": {
        setPickedCarParts((pickedCarParts) => ({
          ...pickedCarParts,
          windows: true,
        }));
        if (props.carColor) {
          setColors((colors) => ({
            ...colors,
            windows: props.carColor,
          }));
        }
        break;
      }

      case "hood/back": {
        setPickedCarParts((pickedCarParts) => ({
          ...pickedCarParts,
          hood: true,
        }));
        if (props.carColor) {
          setColors((colors) => ({
            ...colors,
            hood: props.carColor,
          }));
        }
        break;
      }

      case "1013": {
        setPickedCarParts((pickedCarParts) => ({
          ...pickedCarParts,
          doors: true,
        }));
        if (props.carColor) {
          setColors((colors) => ({
            ...colors,
            doors: props.carColor,
          }));
        }
        break;
      }
    }
  };

  return (
    <>
      <Text color="white" ref={textRef} position={[0, 0.5, 0]}>
        {hoveredCarPart && `Selected car part: ${hoveredCarPart}`}
      </Text>
      <group
        className={styles.container}
        ref={groupRef}
        dispose={null}
        position={[0, 0.64, 0]}
        rotation={[0,rotation,0]}
        scale={scale}
        onPointerOver={(e) => (
          e.stopPropagation(), setHoveredCarPart(e.object.material.name)
        )}
        onPointerOut={(e) => setHoveredCarPart(null)}
        onClick={(e) => meshClicked(e)}
      >
        <group>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials["1014"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials["1016"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials["1015"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials["1001"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials["1003"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials["1002"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials["1002"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials["1006"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials["1012"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials["1017"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials["1005"]}
          />

          {/* --------------------------------- Car exterior meshes --------------------------------- */}

          {/* Front color */}
          <mesh
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials["1007"]}
            material-color={colors.front}
            material-name="front"
          ></mesh>

          {/* Ceiling and back*/}
          <mesh
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials["1008"]}
            material-color={colors.ceiling}
            material-name="ceiling/back"
          />
          {/* Bumpers and lights */}
          <mesh
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials["1011"]}
            material-color={props.chosenBumpersColor}
            material-name="bumpers/lights"
          />

          {/* Windows */}
          <mesh
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials["1003"]}
            material-color={props.chosenWindowsColor}
            material-name="windows"
          />

          {/* Hood and back */}
          <mesh
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials["1004"]}
            material-color={props.chosenHoodColor}
            material-name="hood/back"
          />
          {/* Doors */}
          <mesh
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials["1013"]}
            material-color={props.chosenDoorsColor}
            material-name="doors"
          />
        </group>
      </group>
      <color args={[0, 0, 0]} attach="background" />
      {/* <mesh
        rotation-x={-Math.PI * 0.5}
        castShadow
        receiveShadow
        position={[0, -0.55, 0]}
      >
        <planeBufferGeometry args={[30, 30]} />
        <meshPhysicalMaterial
          roughnessMap={roughness}
          envMapIntensity={0.4}
          color={[0.015, 0.015, 0.015]}
          roughness={0.7}
        />
      </mesh> */}
    </>
  );
}

useGLTF.preload("assets/models/beetle_old/scene.gltf");
