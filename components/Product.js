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
      <h1 className={styles.title}>Kopi Susu</h1>
      <span className={styles.price}>RP 19.000</span>
      <p className={styles.desc}>
      Rangers! udah cobain Kopi susu dari Rangkopi belum!? dijamin deh ini seger bangeeeettt untuk harimu 😋
          Mumpung lagi ada promo jadi cuma 19k aja, buruan serbuuu sebelum kehabisan yaaaaa😆
      </p>
      <div className={styles.info}></div>
    </div>
  );
};

export default Product;
