import styles from '../../styles/hero/hero.module.scss'

export default function HeroComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.slogan}>
        <h1 className={styles.main_title} >Classical beauties ready to be ridden</h1>
        <div className={styles.sub_title_container}>
            <h2 className={styles.sub_title} data-end="style">Ride with </h2>
        </div>

      </div>
    </section>
  );
}
