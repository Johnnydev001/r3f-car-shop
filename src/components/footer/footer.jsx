import styles from "../../styles/footer/footer.module.scss";

import facebook from "/assets/icons/facebook.png";
import whatsapp from "/assets/icons/whatsapp.png";
import instagram from "/assets/icons/instagram.png";

export default function FooterComponent() {

  return (
    <section className={styles.container}>
      <section className={styles.sub_container}>
        <h1>LOGO</h1>
        <h2>Copyright © 2022</h2>
      </section>

      <section className={styles.sub_container}>
        <h1>Contact</h1>
        <div className={styles.contact_container}>
          <label>Phone: +351 929999999</label>
          <label>Email: store@email.com</label>
        </div>
      </section>

      <section className={styles.sub_container}>
        <h1>Social media</h1>
        <div className={styles.social_media_container}>
          <img className={styles.social_media} src={facebook} alt="Facebook"/>
          <img className={styles.social_media} src={whatsapp} alt="Whats App" />
          <img className={styles.social_media} src={instagram} alt="Instagram"/>
        </div>
      </section>
    </section>
  );
}
