import { PlayCircleIcon } from "lucide-react";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { Cycles } from "../Cycles";
import { useRef, useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState('')
  const taskNameInput = useRef<HTMLInputElement>(null)

  function handleCreateNewTask (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log("deu certo",taskName, taskNameInput.current.value)
  }

    return (
         <form onSubmit={ handleCreateNewTask}  className="form">
          <div className="formRow">
            <DefaultInput
              labelText="task"
              id="meuInput"
              type="text"
              placeholder="Digite algo"
              // value={taskName}
              // onChange={(e) => setTaskName(e.target.value)}
              ref={taskNameInput}
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