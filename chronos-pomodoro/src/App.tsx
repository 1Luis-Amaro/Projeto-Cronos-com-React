import "./styles/theme.css";
import "./styles/global.css";
import type { TaskStateModel } from "./models/TaskStateModel";
import { useState } from "react";
import Home from "./pages/Home";
import { TaskContext } from "./contexts/TaskContext";

const initialState: TaskStateModel = {
  task: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime:25,
    shortBreakTime: 5,
    longBreakTime: 15,
  }
}

function App() {
  const [state, setState] = useState(initialState)
  return(
  <TaskContext.Provider value={{outraCoisa:321}}>
     <Home/>
  </TaskContext.Provider>
  )
}




export default App;
