import calendar from "/assets/icons/calendar.png";
import road from "/assets/icons/road.png";
import oil from "/assets/icons/oil.png";
import styles from "../../styles/topcars/top-cars.module.scss";

import lancia from "../../../public/assets/imgs/lancia.jpg";
import nissan from "../../../public/assets/imgs/nissan.jpg";
import honda from "../../../public/assets/imgs/honda.png";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Lancia } from "../models/Lancia";
import {
  Environment,
  PresentationControls,
  ContactShadows,
  MeshReflectorMaterial,
  Stage,
} from "@react-three/drei";
import { Honda } from "../models/Honda";
import { Nissan } from "../models/Nissan";

const renderModelByName = (name) => {
  switch (name) {
    case "lancia":
      return <Lancia />;

    case "nissan":
      return <Nissan />;

    case "honda":
      return <Honda />;

    default:
      return <Lancia />;
  }
};

export default function TopCarsComponent() {
  const [modelButtonShown, setModelButtonShown] = useState(false);
  const [renderModelButtonClick, setRenderModelButtonClick] = useState(false);

  const render3dModel = (model) => {
    return (
      <section className={styles.canvas_container}>
        <Suspense
          fallback={
            <div
              style={{
                padding: "2em",
                border: "1px solid black",
                borderRadius: "0.5em",
                background: "white",
                color: "black",
              }}
            >
              <h1>Loading model...</h1>
            </div>
          }
        >
          <Canvas camera={{ position: [0, 0, 3], fov: 55, zoom: 1.7 }}>
            <color attach="background" args={["#2d4967"]} />
            <fog attach="fog" args={["#2d4967", 10, 20]} />
            <ambientLight intensity={0.5} />
            <PresentationControls
              makeDefault
              polar={[0, 0]}
              config={{ mass: 2, tension: 600 }}
              global
              speed={1.5}
            >
              <Stage environment={"city"} contactShadow={false} intensity={0.4}>
                {renderModelByName(model)}
              </Stage>
            </PresentationControls>

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={2}
                mixStrength={40}
                roughness={1}
                color="#101010"
                metalness={2}
              />
            </mesh>

            <ContactShadows
              position={[0, 0, 0]}
              opacity={0.75}
              scale={10}
              blur={2.5}
              far={4}
            />
          </Canvas>
        </Suspense>
      </section>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.headings_container}>
        <h1 className={styles.main_title}>Best picks of the month</h1>
        <h2 className={styles.sub_title}>Used vehicles</h2>
      </div>

      <section className={styles.cars_container}>
        <ul className={styles.cars_list}>
          <li
            key={1}
            onPointerEnter={() => setModelButtonShown(true)}
            onPointerLeave={() => setModelButtonShown(false)}
          >
            {!renderModelButtonClick && (
              <div className={styles.image_container}>
                <img className={styles.car_picture} alt="Car" src={lancia} />
              </div>
            )}

            {modelButtonShown && !renderModelButtonClick && (
              <button
                className={styles.render_btn}
                onClick={() => setRenderModelButtonClick(true)}
              >
                3D
              </button>
            )}
            {renderModelButtonClick && render3dModel("lancia")}
            <section className={styles.car_container}>
              <div>
                <h3 className={styles.car_brand}>Lancia</h3>
                <h4 className={styles.car_model}>Fulvia</h4>
              </div>

              <div className={styles.items_container}>
                <div className={styles.items_sub_container}>
                  <div className={styles.items}>
                    <img
                      className={styles.icon}
                      alt="calendar"
                      src={calendar}
                    />
                    <label>1970</label>
                  </div>

                  <div className={styles.items}>
                    <img className={styles.icon} alt="km" src={road} />
                    <label>323 000 KM</label>
                  </div>

                  <div className={styles.items}>
                    <img className={styles.icon} alt="oil" src={oil} />
                    <label>gasoline</label>
                  </div>
                </div>

                <div className={styles.price_container}>
                  <h3 className={styles.items}>Price: 70814.46 €</h3>
                </div>
              </div>
            </section>
          </li>

          <li
            key={2}
            onPointerEnter={() => setModelButtonShown(true)}
            onPointerLeave={() => setModelButtonShown(false)}
          >
            {!renderModelButtonClick && (
              <div className={styles.image_container}>
                <img className={styles.car_picture} alt="Car" src={nissan} />
              </div>
            )}

            {modelButtonShown && !renderModelButtonClick && (
              <button
                className={styles.render_btn}
                onClick={() => setRenderModelButtonClick(true)}
              >
                3D
              </button>
            )}
            {renderModelButtonClick && render3dModel("nissan")}
            <section className={styles.car_container}>
              <div>
                <h3 className={styles.car_brand}>Nissan</h3>
                <h4 className={styles.car_model}>Skyline</h4>
              </div>

              <div className={styles.items_container}>
                <div className={styles.items_sub_container}>
                  <div className={styles.items}>
                    <img
                      className={styles.icon}
                      alt="calendar"
                      src={calendar}
                    />
                    <label>1991</label>
                  </div>

                  <div className={styles.items}>
                    <img className={styles.icon} alt="km" src={road} />
                    <label>350 000 KM</label>
                  </div>

                  <div className={styles.items}>
                    <img className={styles.icon} alt="oil" src={oil} />
                    <label>gasoline</label>
                  </div>
                </div>

                <div className={styles.price_container}>
                  <h3 className={styles.items}>Price: 80000 €</h3>
                </div>
              </div>
            </section>
          </li>

          <li
            key={3}
            onPointerEnter={() => setModelButtonShown(true)}
            onPointerLeave={() => setModelButtonShown(false)}
          >
            {!renderModelButtonClick && (
              <div className={styles.image_container}>
                <img className={styles.car_picture} alt="Car" src={honda} />
              </div>
            )}

            {modelButtonShown && !renderModelButtonClick && (
              <button
                className={styles.render_btn}
                onClick={() => setRenderModelButtonClick(true)}
              >
                3D
              </button>
            )}
            {renderModelButtonClick && render3dModel("honda")}
            <section className={styles.car_container}>
              <div>
                <h3 className={styles.car_brand}>Honda</h3>
                <h4 className={styles.car_model}>NSX</h4>
              </div>

              <div className={styles.items_container}>
                <div className={styles.items_sub_container}>
                  <div className={styles.items}>
                    <img
                      className={styles.icon}
                      alt="calendar"
                      src={calendar}
                    />
                    <label>1990</label>
                  </div>

                  <div className={styles.items}>
                    <img className={styles.icon} alt="km" src={road} />
                    <label>400 000 KM</label>
                  </div>

                  <div className={styles.items}>
                    <img className={styles.icon} alt="oil" src={oil} />
                    <label>gasoline</label>
                  </div>
                </div>

                <div className={styles.price_container}>
                  <h3 className={styles.items}>Price: 60814.46 €</h3>
                </div>
              </div>
            </section>
          </li>
        </ul>
      </section>
    </section>
  );
}
