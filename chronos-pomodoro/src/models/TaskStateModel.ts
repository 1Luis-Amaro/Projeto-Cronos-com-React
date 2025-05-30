import type { TaskMode } from "./TaskModel"

export type TaskStateModel = {
    task: TaskMode[]; //preciso no histórico, Mainform
    secondsRemaining: number; //vou precisar no CountDown, Histórico, MainForm, Button
    formattedSecondsRemaining: string; // vou precisa no Título, CountDown
    activeTask: TaskMode | null //CountDown, His
    currentCycle: number; //é as bolinhas que vão de 1 a 8, vou precisar na Home
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}


