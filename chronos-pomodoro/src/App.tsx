import "./styles/theme.css";
import "./styles/global.css";
import Heading from "./components/Heading";
import { TimerIcon } from "lucide-react";

function App() {
  return (
    <>
      <Heading>
        Olá mundo1{" "}
        <button>
          <TimerIcon />
        </button>{" "}
      </Heading>
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
