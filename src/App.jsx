import { Suspense, useState } from "react";
import styles from "./styles/app/app.module.scss";
import { Canvas } from "@react-three/fiber";
import Car from "./components/car/Car";

import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Customizer from "./components/customizer/Customizer";
import NavbarComponent from "./components/navbar/navbar";
import HeroComponent from "./components/hero/hero";
import TopCarsComponent from "./components/topcars/top-cars";
import FooterComponent from "./components/footer/footer";


function App() {
  const [carColor, setCarColor] = useState("");
  const [pickedCarParts, setPickedCarParts] = useState({
    front: false,
    ceiling: false,
    bumpers: false,
    windows: false,
    hood: false,
    doors: false,
  });


  return (
    <section className={styles.container}>
      <NavbarComponent />
      <HeroComponent />
      <TopCarsComponent />
      <section className={styles.customizer_container}>
        <Customizer
          pickedCarParts={pickedCarParts}
          setCarColor={(color) => setCarColor(color)}
        />
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={"Loading world..."}>
            <Environment
              files="/assets/hdri/venice/venice_sunrise_4k.hdr"
              ground={{ height: 2, radius: 14, scale: 35 }}
            />

            <PerspectiveCamera makeDefault position={[0, -3, 0]} />
            <directionalLight intensity={0.8} color={'orange'} position={[3, 0, 5]}/>
            <OrbitControls
              makeDefault
              enabled
              minDistance={8}
              maxDistance={13}
              enablePan={false}
              rotateSpeed={0.7}
              maxPolarAngle={1.2} 
            />
            <ambientLight intensity={0.6} />

            <Car
              carColor={carColor}
              setPickedCarParts={(pickedCarParts) =>
                setPickedCarParts(pickedCarParts)
              }
            />
            <ContactShadows position={[0, -0.5, 0]} />
          </Suspense>
        </Canvas>
      </section>

      <FooterComponent />
    </section>
  );
}

export default App;
