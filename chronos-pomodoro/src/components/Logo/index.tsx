import React from "react";
import styles from "./styles.module.css";
import { TimerIcon } from "lucide-react";
import { RouterLink } from "../Router Link";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoLink} href="/">
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
};

export default Logo;
