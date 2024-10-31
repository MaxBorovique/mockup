import { footerLinks } from "../../constants/links";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="#" alt="Page logo" />
        </div>
        <nav className={styles.navigation}>
          {footerLinks.map((item) => (
            <ul key={item.id}>
              <li className={styles.item}>
                <a href="#">{item.name}</a>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </footer>
  );
};
