import { PlayCircleIcon } from "lucide-react";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { Cycles } from "../Cycles";
import { useRef } from "react";
import type { TaskMode } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export function MainForm() {
  const {state, setState} = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  //ciclos 
  const nextCycle = getNextCycle(state.currentCycle)

  function handleCreateNewTask (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (taskNameInput.current === null)  return

    const taskName = taskNameInput.current.value.trim() //o trim tira o espaco do início e/ou fim de uma string 

    if(!taskName){
      alert('Digite o nome da tarefa')
      return
    }

    const newTask: TaskMode = {
      id: Date.now().toString(), //pra não baixar uma biblioteca de id, fiz isso de colocar o id da data de agora a pessoa nunca vai conseguir colocar id igual pq o tempo vai ter passado
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interrupetDate: null,
      duration: 1,
      type: 'workTime',
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, //conferir
        formattedSecondsRemaining: '00:00',
        task: [...prevState.task, newTask],
      }
    })
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