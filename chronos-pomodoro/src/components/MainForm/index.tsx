import { PlayCircleIcon } from "lucide-react";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { Cycles } from "../Cycles";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState('')

  function handleCreateNewTask (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log("deu certo")
  }

    return (
         <form onSubmit={ handleCreateNewTask}  className="form">
          <h1>{taskName}</h1>
          <div className="formRow">
            <DefaultInput
              labelText="task"
              id="meuInput"
              type="text"
              placeholder="Digite algo"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
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