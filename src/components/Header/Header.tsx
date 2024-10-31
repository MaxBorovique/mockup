import { navigation } from "../../constants/links";
import { ThemeSwitcher } from "../elements/ThemeSwitcher/ThemeSwitcher";
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="#" alt="Page logo" />
        </div>
        <nav className={styles.navigation}>
          {navigation.map((item) => (
            <ul key={item.name}>
              <li className={styles.item}>
                <a href="#">{item.name}</a></li>
            </ul>
          ))}
        </nav>
      <ThemeSwitcher />
      </div>
    </header>
  );
};
