import { state } from "../../App";
import styles from "../../styles/customizer/customizer.module.scss";
import { useSnapshot } from "valtio";

export default function Customizer() {

  // Hook for handling state changes
  const snap = useSnapshot(state);

  // Update the state color when it changes
  const handleColorChange = (color) => {
    state.color = color.target.value;
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
        style={snap.hovered ? { display: "flex" } : { display: "none" }}
      >
        <form className={styles.customization_form} action="submit">
          <h3 className={styles.title}>Pick a color:</h3>
          <input
            className={styles.color_picker}
            type="color"
            name="color"
            id="color"
            onChange={handleColorChange}
          />
        </form>
      </div>
    </section>
  );
}
