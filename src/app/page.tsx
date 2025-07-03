import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.welcome}>Welcome</h1>
      <p className={styles.link}>
        <Link href="/auth">Click Here To Login</Link>
      </p>
    </div>
  );
}
