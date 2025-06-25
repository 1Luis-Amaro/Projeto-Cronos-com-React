import { PlayCircleIcon } from "lucide-react";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { Cycles } from "../Cycles";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
  const {setState} = useTaskContext()

  function handleClick () {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '21:00'
      } 
    })
  }

    return (
         <form className="form">
          <button onClick={handleClick} type="button">Clicar</button>
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
            <p>Lorem ipsum dolsdsor</p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
    )
}