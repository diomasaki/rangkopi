import styles from "../styles/Products.module.css";

const ProductFours = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://scontent.fcgk42-1.fna.fbcdn.net/v/t39.30808-6/312062439_559108686216817_3455017472108441880_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=omxc9hp31HgAX9X-s-H&_nc_ht=scontent.fcgk42-1.fna&oh=00_AfC8G4RtNHA5wibb8M5I-WGpPNJ1UFrzDehcsHwBWJ1H4Q&oe=653AF352"
        alt=""
        width="300"
        height="300"
      />
      <h1 className={styles.title}>Strawberry Soda</h1>
      <span className={styles.price}>RP 26.000</span>
      <p className={styles.desc}>
      Rangers! udah cobain strawberry squash dari Rangkopi belum!? Dijamin deh ini seger bangeeeettt untuk harimu 😋
          Mumpung lagi ada promo jadi cuma 26k aja, buruan serbuuu sebelum kehabisan yaaaaa😆
      </p>
      <div className={styles.info}></div>
    </div>
  );
};

export default ProductFours;
