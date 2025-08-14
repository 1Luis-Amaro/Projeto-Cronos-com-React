import MainTamplate from "../../components/templates/MainTemplate";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import DefaultInput from "../../components/DefaultInput";
import DefaultButton from "../../components/DefaultButton";
import { SaveIcon } from "lucide-react";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

const Settings = () => {
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longtBreakTimeInput = useRef<HTMLInputElement>(null);
  const { state } = useTaskContext();
  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longtBreakTime = longtBreakTimeInput.current?.value;

    console.log(workTime, shortBreakTime, longtBreakTime);
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
            ></DefaultInput>
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
            ></DefaultInput>
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo"
              ref={longtBreakTimeInput}
              defaultValue={state.config.longBreakTime}
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
