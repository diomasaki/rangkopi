import style from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

const Services = ({ services }) => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>What We Have Here?</h1>
        <h1 className={style.subtitle}>Visit our pages to see information about us!</h1>
        <div className={style.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`} passHref>
              <div className={style.service}>
                <div className={style.catInfo}>{service.desc}</div>
                <span className={style.cat}>{service.title}</span>
                <div className={style.media}>
                  {service.video ? (
                    <video
                      className={style.video}
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
                      width={100}
                      height={100}
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
