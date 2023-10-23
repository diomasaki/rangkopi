import styles from "../styles/ProductsList.module.css";
import Product from "../components/Product";
import ProductTwo from "../components/ProductTwo";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST COFFEE IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <Product />
        <ProductTwo />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
