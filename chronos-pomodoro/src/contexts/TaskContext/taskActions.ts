// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto como type e (opcionalmente) payload
// type <- o tipo de ação, geralmente um string (pode ser um enum, constante etc)
// payload <- os dados extradas enviados com a action, se necessário para atualizar o estado

import type { TaskModel } from "../../models/TaskModel";

//fazendo os meus types
export enum TaskActionTypes {
  START_TASK = "STARK_TASK",
  INTERRUPT_TAKS = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE"
}

export type TaskActionModel = 
| {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
}

| {
    type: TaskActionTypes.INTERRUPT_TAKS
    payload: TaskActionModel
}
| {
    type: TaskActionTypes.RESET_STATE
}
