import { useState } from "react";
import styles from "../../styles/customizer/customizer.module.scss";

export default function Customizer(props) {
  const [carColor, setCarColor] = useState("");

  props.setCarColor(carColor);

  const handleColorChange = (color) => {
    setCarColor(color.target.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.headings_container}>
        <h1 className={styles.main_heading}>Car customizer</h1>

        <h2 className={styles.sub_heading}>
          Customize the vehicle according to your taste
        </h2>
      </div>

      <div
        className={styles.color_picker_container}
        style={props.hovered ? { display: "flex" } : { display: "none" }}
      >
        <form className={styles.customization_form} action="submit">
          <h3 className={styles.title}>Pick a color:</h3>
          <input
            className={styles.color_picker}
            type="color"
            name=""
            id=""
            onChange={handleColorChange}
          />
        </form>
      </div>
    </section>
  );
}
