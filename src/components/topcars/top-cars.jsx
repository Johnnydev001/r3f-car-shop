import calendar from "/assets/icons/calendar.png";
import road from "/assets/icons/road.png";
import oil from "/assets/icons/oil.png";
import styles from "../../styles/topcars/top-cars.module.scss";
import db from '../../../db.json'

export default function TopCarsComponent() {

  

  return (
    <section className={styles.container} >
      <div className={styles.headings_container}>
        <h1 className={styles.main_title}>Best picks of the month</h1>
        <h2 className={styles.sub_title}>Used vehicles</h2>
      </div>

      <section className={styles.cars_container}>
        <ul className={styles.cars_list}>
          {db.cars.length > 0 &&
            db.cars.map((car) => (
              <li key={car.id}>
                <div>
                  <img className={styles.car_picture} alt="Car" src={car.img} />
                </div>

                <section className={styles.car_container}>
                  <div>
                    <h3 className={styles.car_brand}>{car.name}</h3>
                    <h4 className={styles.car_model}>{car.model}</h4>
                  </div>

                  <div className={styles.items_container}>
                    <div className={styles.items_sub_container}>
                      <div className={styles.items}>
                        <img
                          className={styles.icon}
                          alt="calendar"
                          src={calendar}
                        />
                        <label>{car.date}</label>
                      </div>

                      <div className={styles.items}>
                        <img className={styles.icon} alt="km" src={road} />
                        <label>{car.km}</label>
                      </div>

                      <div className={styles.items}>
                        <img className={styles.icon} alt="oil" src={oil} />
                        <label>{car.fuel}</label>
                      </div>
                    </div>

                    <div className={styles.price_container}>
                      <h3 className={styles.items}>Price: {car.price}</h3>
                    </div>
                  </div>
                </section>
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
}
