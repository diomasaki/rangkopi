import styles from "../styles/Products.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/85a2fcc2-bb89-464a-b341-0e438c72eff2_Go-Biz_20201006_100139.jpeg"
        alt=""
        width="300"
        height="300"
      />
      <h1 className={styles.title}>MILK COFFEE</h1>
      <span className={styles.price}>RP 19.000</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className={styles.info}></div>
    </div>
  );
};

export default Product;
