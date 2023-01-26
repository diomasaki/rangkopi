import styles from "../styles/Products.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://png.monster/wp-content/uploads/2022/03/png.monster-9.png"
        alt=""
        width="300"
        height="300"
      />
      <h1 className={styles.title}>AMERICANO</h1>
      <span className={styles.price}>RP 20.000</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className={styles.info}></div>
    </div>
  );
};

export default Product;
