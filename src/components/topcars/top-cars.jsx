import calendar from "/assets/icons/calendar.png";
import road from "/assets/icons/road.png";
import oil from "/assets/icons/oil.png";
import styles from "../../styles/topcars/top-cars.module.scss";

export default function TopCarsComponent(props) {
  return (
    <section className={styles.container} ref={props.ref}>
      <section>
        <h1 className={styles.main_title}>Best picks of the month</h1>
        <h2 className={styles.sub_title}>Used vehicles</h2>
      </section>

      <section className={styles.cars_container}>
        <section>
          <div>
            <img
              className={styles.car_picture}
              alt="Car"
              src="https://images.unsplash.com/photo-1587750059638-e7e8c43b99fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            />
          </div>

          <section className={styles.car_container}>
            <div>
              <h3 className={styles.car_brand}>Chevrolet</h3>
              <h4 className={styles.car_model}>Camaro</h4>
            </div>

            <div className={styles.items_container}>
              <div className={styles.items_sub_container}>
                <div className={styles.items}>
                  <img className={styles.icon} alt="calendar" src={calendar} />
                  <label>Dec. 1970</label>
                </div>

                <div className={styles.items}>
                  <img className={styles.icon} alt="km" src={road} />
                  <label>323 000 KM</label>
                </div>

                <div className={styles.items}>
                  <img className={styles.icon} alt="oil" src={oil} />
                  <label>Gasoline</label>
                </div>
              </div>

              <div className={styles.price_container}>
                <h3 className={styles.items}>Price: 50400 €</h3>
              </div>
            </div>
          </section>
        </section>

        <section>
          <div>
            <img
              className={styles.car_picture}
              alt="Car"
              src="https://images.unsplash.com/photo-1584345604325-f5091269a0d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>

          <section className={styles.car_container}>
            <div>
              <h3 className={styles.car_brand}>Chevrolet</h3>
              <h4 className={styles.car_model}>Camaro</h4>
            </div>

            <div className={styles.items_container}>
              <div className={styles.items_sub_container}>
                <div className={styles.items}>
                  <img className={styles.icon} alt="calendar" src={calendar} />
                  <label>Dec. 1980</label>
                </div>

                <div className={styles.items}>
                  <img className={styles.icon} alt="km" src={road} />
                  <label>400 000 KM</label>
                </div>

                <div className={styles.items}>
                  <img className={styles.icon} alt="oil" src={oil} />
                  <label>Gasoline</label>
                </div>
              </div>

              <div className={styles.price_container}>
                <h3 className={styles.items}>Price: 40000 €</h3>
              </div>
            </div>
          </section>
        </section>

        <section>
          <div>
            <img
              className={styles.car_picture}
              alt="Car"
              src="https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>

          <section className={styles.car_container}>
            <div>
              <h3 className={styles.car_brand}>MG</h3>
              <h4 className={styles.car_model}>MGB</h4>
            </div>

            <div className={styles.items_container}>
              <div className={styles.items_sub_container}>
                <div className={styles.items}>
                  <img className={styles.icon} alt="calendar" src={calendar} />
                  <label>Jan. 1974</label>
                </div>

                <div className={styles.items}>
                  <img className={styles.icon} alt="km" src={road} />
                  <label>300 000 KM</label>
                </div>

                <div className={styles.items}>
                  <img className={styles.icon} alt="oil" src={oil} />
                  <label>Gasoline</label>
                </div>
              </div>

              <div className={styles.price_container}>
                <h3 className={styles.items}>Price: 50000 €</h3>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
