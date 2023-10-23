import styles from "../styles/Products.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://assets-a1.kompasiana.com/items/album/2023/01/15/homemade-iced-americano-recipe-1-720x1080-63c3e4d84addee7149048932.jpg?t=o&v=770"
        alt=""
        width="300"
        height="300"
      />
      <h1 className={styles.title}>Americano</h1>
      <span className={styles.price}>RP 18.000</span>
      <p className={styles.desc}>
      Rangers! udah cobain Americano dengan beans blend robusta dari Rangkopi belum!? Dijamin deh ini seger bangeeeettt untuk harimu 😋
          Mumpung lagi ada promo jadi cuma 18k ajaa 😆
      </p>
      <div className={styles.info}></div>
    </div>
  );
};

export default Product;
