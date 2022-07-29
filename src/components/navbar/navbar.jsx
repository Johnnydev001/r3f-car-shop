import styles from "../../styles/navbar/navbar.module.scss";
import home from "/assets/icons/home.png";
import english from "/assets/icons/english.png";
export default function NavbarComponent() {
  
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>LOGO</div>

      <div className={styles.page_links}>
        <ul className={styles.links}>
          <li >
            <img data-name="home" className={styles.home} src={home} alt="Home" />
          </li>
          <li data-name="vehicles" >
            VEHICLES
          </li>
          <li data-name="customizer" >
            CUSTOMIZER
          </li>
          <li data-name="contact">
            CONTACT
          </li>
          <li data-name="language">
          <img className={styles.english} src={english} alt="Language"/>
          </li>
        </ul>
      </div>
    </nav>
  );
}
