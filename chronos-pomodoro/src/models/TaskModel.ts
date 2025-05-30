export type TaskMode = {
    id: string;
    name: string;
    duration:number;
    startDate: number;
    completeDate: number | null; //quando o timer chegar ao final
    interrupetDate: number | null; //quando a task for interrompida 
    type: 'workTime' | 'shortBreak' | 'longBreakTime'
}