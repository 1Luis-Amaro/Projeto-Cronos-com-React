import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  //Tips
  const tipsForWhenActivetask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Desncanso longo</span>,
  };

  const tipsForNoActivetask = {
    workTime: (
      <span>
        {" "}
        Próximo ciclo é de <b> {state.config.workTime}min </b>{" "}
      </span>
    ),
    shortBreakTime: (
      <span>Próximo descanso é de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActivetask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActivetask[nextCycleType]}
    </>
  );
}
