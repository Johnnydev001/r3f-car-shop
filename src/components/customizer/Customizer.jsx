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
        <div className={styles.customization_form}>
          <h3 className={styles.title}>Pick your desired color</h3>
          <h4 className={styles.sub_title}>Change how the car looks</h4>
          <input
            className={styles.color_picker}
            type="color"
            name="color"
            id="color"
            onChange={handleColorChange}
          />
          <button
            className={styles.save_btn}
            type="button"
            onClick={() => (state.modelExport = true)}
          >
            Export model
          </button>
        </div>
      </div>
    </section>
  );
}
