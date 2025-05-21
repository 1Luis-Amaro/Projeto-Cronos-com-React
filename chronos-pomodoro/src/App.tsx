import "./styles/theme.css";
import "./styles/global.css";

import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import CountDown from "./components/CountDown";
import DefaultInput from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import DefaultButton from "./components/DefaultButton";
import {PlayCircleIcon } from "lucide-react";
import Footer from "./components/Footer";
import { useState } from "react";
import Heading from "./components/Heading";

function App() {
  const [numero, setNumero] = useState(0)

  function handleClick () {
    setNumero(prevState => prevState + 1)
  }

  return (
    <>
    <Heading>Numero{numero}</Heading>
    <button onClick={handleClick} >Aumenta</button>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <DefaultInput
              labelText="task"
              id="meuInput"
              type="text"
              placeholder="Digite algo"
              //disabled
              //defaultValue='Valor preenchido'
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor</p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
      </Container>
    
      <Container>
        <Footer/>
      </Container>
    
    </>
  );
}

export default App;
