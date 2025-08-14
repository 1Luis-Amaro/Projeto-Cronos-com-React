import MainTamplate from "../../components/templates/MainTemplate";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import DefaultInput from "../../components/DefaultInput";
import DefaultButton from "../../components/DefaultButton";
import { SaveIcon } from "lucide-react";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";

const Settings = () => {
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longtBreakTimeInput = useRef<HTMLInputElement>(null);
  const { state } = useTaskContext();
  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss()



const formErrors = []

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longtBreakTime = Number(longtBreakTimeInput.current?.value);

    if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longtBreakTime) ) {
      formErrors.push('Digite apenas numeros para TODOS os campos')
      
    }

    if(workTime < 1 || workTime > 99 ) {
      formErrors.push('Digite valores entre 1 e 99 para foco')
    }

    if(shortBreakTime < 1 || shortBreakTime > 30 ) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto')
    }

    if(longtBreakTime < 1 || longtBreakTime > 60 ) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo')
    }

    if(formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error)
      })
      return
    }
    console.log('Salvar')
  }

  return (
    <MainTamplate>
      <Container>
        <Heading>Configurações </Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText="Foco"
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type="number"
              
            ></DefaultInput>
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type="number"
            ></DefaultInput>
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo"
              ref={longtBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type="number"
            ></DefaultInput>
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTamplate>
  );
};

export default Settings;
