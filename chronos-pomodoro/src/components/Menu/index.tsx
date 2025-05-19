import React from "react";
import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";



const Menu = () => {
  return <div className={styles.menu}>
    <a href="#" className={styles.menuLink}>
      <TimerIcon />
      </a>
    <a href="#" className={styles.menuLink}>
      <HouseIcon />
      </a>
    <a href="#" className={styles.menuLink}>
      <HistoryIcon />
      </a>
    <a href="#" className={styles.menuLink}>
      <SettingsIcon />
      </a>
    <a href="#" className={styles.menuLink}>
      <SunIcon />
      </a>
  </div>
};

export default Menu;
