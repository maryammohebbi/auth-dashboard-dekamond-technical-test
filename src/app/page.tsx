import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.auth}>
        <Link href="/auth">Click Here To Login</Link>
      </p>
    </div>
  );
}
