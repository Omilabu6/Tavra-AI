import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Tavra AI logo"
          width={300}
          height={50}
          priority
        />
        <h1 className={styles.title}>Welcome to Tavra AI!</h1>
    </div>
  );
}
