import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import Provider, { useDarkmodeContext } from 'react-use-dark-mode';
import styles from '../styles/About.module.css';

export function Header({  }) {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className={styles.menuContainer}>
      <div className={styles.titleButtons}>
        <h1>El blog de Miguel</h1>
        <nav>
          <ul className={styles.list}>
            <li className={styles.navButton}><a href="#">Artículos</a></li>
            <li className={styles.navButton}><a href="#">Sobre mí</a></li>
          </ul>
        </nav>
      </div>
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      />
    </div>
   
  )
}
