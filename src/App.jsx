import { Suspense } from "react";
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
import { proxy } from "valtio";

// Constant to store the state of the application
export const state = proxy({
  color: "",
  hovered: false,
  modelExport: false,
});

function App() {
  return (
    <section className={styles.container}>
      <NavbarComponent />
      <HeroComponent />
      <TopCarsComponent />
      <section className={styles.customizer_container}>
        <Customizer />
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={"Loading world..."}>
            <Environment
              files="/assets/hdri/venice/venice_sunrise_4k.hdr"
              ground={{ height: 2, radius: 14, scale: 35 }}
            />

            {/* Default camera */}
            <PerspectiveCamera makeDefault position={[0, -3, 8]} />
            <directionalLight
              intensity={0.8}
              color={"orange"}
              position={[3, 0, 5]}
            />

            {/* Default Camera controls*/}
            <OrbitControls
              makeDefault
              enabled
              minDistance={4.5}
              maxDistance={7}
              enablePan={false}
              rotateSpeed={0.7}
              maxPolarAngle={1.2}
              minPolarAngle={0.5}
            />
            <ambientLight intensity={0.6} />

            <Car />
            <ContactShadows position={[0, -0.5, 0]} />
          </Suspense>
        </Canvas>
      </section>

      <FooterComponent />
    </section>
  );
}

export default App;
