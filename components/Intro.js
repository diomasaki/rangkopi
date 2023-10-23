import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>RANGKOPI</span> E-CATALOG
        </h1>
        <p className={style.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s.
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/Rangkopi.png"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
