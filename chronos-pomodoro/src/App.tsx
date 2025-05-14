import "./styles/theme.css";
import "./styles/global.css";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Heading attr={123} attr2="String" >Olá mundo1</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo soluta ad,
        dolore blanditiis temporibus consequatur sequi similique amet cupiditate
        reprehenderit cumque officiis eum! Beatae quos inventore rerum non
        libero aliquam!
      </p>
    </>
  );
}

export default App;
