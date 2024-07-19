import Image from "next/image";
import styles from "./page.module.css";
import Products from "./(pages)/products/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Products />
    </main>
  );
}
