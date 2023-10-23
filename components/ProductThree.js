import styles from "../styles/Products.module.css";

const ProductThree = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://scontent.fcgk42-1.fna.fbcdn.net/v/t39.30808-6/315497495_573578534769832_7518517819080645353_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NT7PbjyPHFsAX-l6mS-&_nc_ht=scontent.fcgk42-1.fna&oh=00_AfBYYLpYsA0NYGrn5ZAPiUEagARqjL4RTO4eA5sFNVWWmw&oe=653BBD44"
        alt=""
        width="300"
        height="300"
      />
      <h1 className={styles.title}>Lychee Bomb</h1>
      <span className={styles.price}>RP 26.000</span>
      <p className={styles.desc}>
        Rangers! udah cobain lychee bomb dari Rangkopi belum!? Dijamin deh ini seger bangeeeettt untuk harimu 😋
          Mumpung lagi ada promo jadi cuma 26k aja, buruan serbuuu sebelum kehabisan yaaaaa😆
      </p>
      <div className={styles.info}></div>
    </div>
  );
};

export default ProductThree;
