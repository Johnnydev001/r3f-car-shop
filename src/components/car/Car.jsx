/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: timblewee (https://sketchfab.com/timblewee)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/volkswagen-beetle-83276f21bd9c41e196c474350b43efb0
title: Volkswagen beetle
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import styles from "../../styles/car/car.module.scss";
import { state } from "../../App";
import { useSnapshot } from "valtio";
import Exporter from '../../utils/exporter'

export default function Car() {

  // Hook for handling state changes
  const snap = useSnapshot(state);

  // Reference to the whole car model
  const groupRef = useRef();

  // Hook for loading the car model
  const { nodes, materials } = useGLTF("assets/models/beetle/scene.gltf");

  // Hook for resizing the model when the window is resized
  const [scale, setScale] = useState(2.5);

  // Hooks for describing the name of the hovered mesh
  const [hoveredCarPart, setHoveredCarPart] = useState();

  // Hook for storing each individual mesh color
  const [colors, setColors] = useState({
    front: "#ffffff",
    ceiling: "#ffffff",
    bumpers: "#ffffff",
    windows: "#ffffff",
    hood: "#ffffff",
    doors: "#ffffff",
    wheels: "#ffffff",
  });

  // Used to detect when is a mesh hovered and if so, change the cursor
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.color}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text  fill="white" style="font-weight: bold;" font-family="'Montserrat', sans-serif" font-size="15" letter-spacing="-.01em"><tspan x="2" y="63">${hoveredCarPart}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    if (hoveredCarPart) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;

    } else {
      document.body.style.cursor = "auto";
    }
  }, [hoveredCarPart]);

  // Get the window dimensions that are used for resizing the model
  const getSizes = () => {
    const body = document.body;
    body.width = window.innerWidth;
    body.height = window.innerHeight;
  };

  window.addEventListener("resize", getSizes, () => {
    setScale(scale - 0.001);
  });

  if(snap.modelExport) {
    const exporter = new Exporter();
    try {
      exporter.exportGLTF(groupRef.current);
    } catch (error) {
      console.log("Failed to export model");
    }
  }

  // Handle the mesh click events and set their colors
  const meshOnClick = (e) => {
    
    switch (e.object.material.name) {
      case "ceiling": {
        if (snap.color) {
          setColors((colors) => ({
            ...colors,
            ceiling: snap.color,
          }));
        }
        break;
      }

      case "front": {
        if (snap.color) {
          setColors((colors) => ({
            ...colors,
            front: snap.color,
          }));
        }
        break;
      }

      case "bumpers": {
        if (snap.color) {
          setColors((colors) => ({
            ...colors,
            bumpers: snap.color,
          }));
        }
        break;
      }

      case "windows": {
        if (snap.color) {
          setColors((colors) => ({
            ...colors,
            windows: snap.color,
          }));
        }
        break;
      }

      case "hood": {
        if (snap.color) {
          setColors((colors) => ({
            ...colors,
            hood: snap.color,
          }));
        }
        break;
      }

      case "doors": {
        if (snap.color) {
          setColors((colors) => ({
            ...colors,
            doors: snap.color,
          }));
        }
        break;
      }
      case "wheels": {
        if (snap.color) {
          setColors((colors) => ({
            ...colors,
            wheels: snap.color,
          }));
        }
        break;
      }
    }
  };
  return (
    <group
      className={styles.container}
      ref={groupRef}
      dispose={null}
      position={[0, 0.47, 0]}
      scale={scale}
      onPointerMove={() => state.model = groupRef.current}
      onPointerOver={(e) => (
        setHoveredCarPart(e.object.material.name),
        state.hovered = true
        
      )}
      onPointerOut={(e) => (setHoveredCarPart(null))}
      onClick={(e) => (meshOnClick(e))}

    >
      <group>
        {/* Internal meshes */}
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

        {/* External meshes */}
        {/* Wheels */}

        <mesh
          geometry={nodes.defaultMaterial_5.geometry}
          material={materials["1002"]}
          material-color={colors.wheels}
          material-name="wheels"
        />
        <mesh
          geometry={nodes.defaultMaterial_6.geometry}
          material={materials["1002"]}
          material-color={colors.wheels}
          material-name="wheels"
        />
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
  );
}

useGLTF.preload("assets/models/beetle/scene.gltf");
