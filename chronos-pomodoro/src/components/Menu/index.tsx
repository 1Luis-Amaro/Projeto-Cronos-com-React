import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

type AvailableThemes = 'dark' | 'light'

const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>('dark')

  function handleThemeChange(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault() //não segue o link

    setTheme(prevTheme => { //tema anterior
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }
 
  // useEffect(() => {
  //   console.log("useEffect sem dependencias")
  // })//Executa toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com array vazio')
  // }, [])//Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log("Theme mudou", theme, Date.now())
    document.documentElement.setAttribute('data-theme', theme)
    return () => {
      console.log("Olha este componente será atualizado   ")
    }
  }, [theme])//Executa apenas quando o valor de theme muda

  return <div className={styles.menu}>
    <h1>{theme}</h1>
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
