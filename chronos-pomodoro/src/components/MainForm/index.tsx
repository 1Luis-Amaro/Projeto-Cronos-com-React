import { PlayCircleIcon } from "lucide-react";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { Cycles } from "../Cycles";

export function MainForm() {
 
  function handleCreateNewTask (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log("deu certo")
  }

    return (
         <form onSubmit={ handleCreateNewTask}  className="form">
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