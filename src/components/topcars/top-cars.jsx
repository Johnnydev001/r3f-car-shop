import calendar from "/assets/icons/calendar.png";
import road from "/assets/icons/road.png";
import oil from "/assets/icons/oil.png";
import styles from "../../styles/topcars/top-cars.module.scss";

import lancia from "../../../public/assets/imgs/lancia.jpg";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Lancia } from "../models/Lancia";
import { Environment, PresentationControls } from "@react-three/drei";

const renderModelByName = (name) => {
  switch (name) {
    case "lancia":
      return <Lancia />;

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
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <Environment preset={"city"} />
          <PresentationControls makeDefault>
            {renderModelByName(model)}
          </PresentationControls>
        </Canvas>
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
            {renderModelButtonClick && render3dModel(lancia)}
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
                  <h3 className={styles.items}>Price: 40814.46 €</h3>
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
            {renderModelButtonClick && render3dModel(lancia)}
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
                  <h3 className={styles.items}>Price: 40814.46 €</h3>
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
            {renderModelButtonClick && render3dModel(lancia)}
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
                  <h3 className={styles.items}>Price: 40814.46 €</h3>
                </div>
              </div>
            </section>
          </li>
        </ul>
      </section>
    </section>
  );
}
