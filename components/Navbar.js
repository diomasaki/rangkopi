import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/">RANGKOPI E-CATALOG</Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/products/home">BERANDA</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/productlist">PRODUK</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/description">RANGKOPI</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/aboutus">TENTANG KAMI</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">KONTAK</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">RANGKOPI</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/home">BERANDA</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/productlist">PRODUK</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/description">RANGKOPI</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/aboutus">TENTANG KAMI</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">KONTAK</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
