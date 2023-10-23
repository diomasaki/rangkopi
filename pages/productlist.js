import styles from "../styles/ProductsList.module.css";
import Product from "../components/Product";
import ProductTwo from "../components/ProductTwo";
import ProductThree from "@/components/ProductThree";
import ProductFours from "@/components/ProductFours";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST COFFEE IN TOWN</h1>
      <p className={styles.desc}>
        So do the coffee. You better choose the right one before you get disappointed!
          Have a pleasant day
      </p>
      <div className={styles.wrapper}>
        <Product />
        <ProductTwo />
        <ProductThree />
        <ProductFours />
      </div>
    </div>
  );
};

export default ProductList;
