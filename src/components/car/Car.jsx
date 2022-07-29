import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import styles from "../../styles/car/car.module.scss";

export default function Car(props) {
  console.log(props);
  const groupRef = useRef();

  const { nodes, materials } = useGLTF("assets/models/beetle_old/scene.gltf");

  const [scale, setScale] = useState(2.5);
  const [hoveredCarPart, setHoveredCarPart] = useState();

  const [pickedCarParts, setPickedCarParts] = useState({
    front: false,
    ceiling: false,
    bumpers: false,
    windows: false,
    hood: false,
    doors: false,
    wheels: false
  });

  props.setPickedCarParts(pickedCarParts);

  const [colors, setColors] = useState({
    front: "#ffffff",
    ceiling: "#ffffff",
    bumpers: "#ffffff",
    windows: "#ffffff",
    hood: "#ffffff",
    doors: "#ffffff",
    wheels: "#ffffff",
  });

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${props.carColor}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text  fill="black" style="font-weight: bold;" font-family="'Montserrat', sans-serif" font-size="15" letter-spacing="-.01em"><tspan x="2" y="63">${hoveredCarPart}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    if (hoveredCarPart) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
      
    }
    else {
      document.body.style.cursor = 'auto';
    }
  }, [hoveredCarPart]);


  window.addEventListener("resize", () => {
    setScale(scale - 0.0001);
  });

  const meshClicked = (e) => {
    switch (e.object.material.name) {
      case "ceiling": {
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

      case "bumpers": {
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

      case "hood": {
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

      case "doors": {
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
      case "wheels": {
        setPickedCarParts((pickedCarParts) => ({
          ...pickedCarParts,
          wheels: true,
        }));
        if (props.carColor) {
          setColors((colors) => ({
            ...colors,
            wheels: props.carColor,
          }));
        }
        break;
      }
    }
  };

  return (
    <>
      <group
        className={styles.container}
        ref={groupRef}
        dispose={null}
        position={[0, 0.47, 0]}
        scale={scale}
        onPointerOver={(e) => (
          e.stopPropagation(), setHoveredCarPart(e.object.material.name), console.log(e.object.material.name)
        )}
        onPointerOut={(e) => (e.stopPropagation(), setHoveredCarPart(null))}
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

          {/* --------------------------------- Car exterior meshes --------------------------------- */}
           {/* Windows */}
          <mesh
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials["1005"]}
            material-color={colors.windows}
            material-name="windows"
          />

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
            material-name="ceiling"
          />
          {/* Bumpers and lights */}
          <mesh
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials["1011"]}
            material-color={colors.bumpers}
            material-name="bumpers"
          />

          {/* Windows */}
          <mesh
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials["1003"]}
            material-color={colors.windows}
            material-name="windows"
          />

          {/* Hood and back */}
          <mesh
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials["1004"]}
            material-color={colors.hood}
            material-name="hood"
          />
          {/* Doors */}
          <mesh
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials["1013"]}
            material-color={colors.doors}
            material-name="doors"
          />
        </group>
      </group>
      
    </>
  );
}

useGLTF.preload("assets/models/beetle_old/scene.gltf");
