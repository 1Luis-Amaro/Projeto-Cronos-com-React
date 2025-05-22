import React, { useState } from "react";
import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

type AvailableThemes = 'dark' | 'light'

const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>('dark')

  function handleThemeChange(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault() //não segue o link
    console.log('Clicado', Date.now())
  }
 

  return <div className={styles.menu}>
    <a href="#" className={styles.menuLink} aria-label="Ir para a Home" title="Ir para a home">
      <HouseIcon />
      </a>
    <a href="#" className={styles.menuLink} aria-label="Ver Histórico" title="Ver Histórico">
      <HistoryIcon />
      </a>
    <a href="#" className={styles.menuLink} aria-label="Ir para Configurações" title="Ir para Configurações">
      <SettingsIcon />
      </a>
    <a href="#" className={styles.menuLink} aria-label="Mudar o Tema" title="Mudar o Tema"  onClick={handleThemeChange}>
      <SunIcon />
      </a>
  </div>
};

export default Menu;
