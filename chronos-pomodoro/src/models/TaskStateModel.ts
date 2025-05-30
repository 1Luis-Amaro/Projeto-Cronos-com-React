import type { TaskMode } from "./TaskModel"

export type TaskStateModel = {
    task: TaskMode[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskMode | null
    currentCycle: number; //é as bolinhas que vão de 1 a 8
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}