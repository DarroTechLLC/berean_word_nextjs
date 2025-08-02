import styles from "./page.module.css";
import DbConnectionStatus from "@/components/DbConnectionStatus";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Berean Church Dashboard</h1>
      <DbConnectionStatus />
      <p>Welcome to the Berean Church management system.</p>
    </div>
  );
}
