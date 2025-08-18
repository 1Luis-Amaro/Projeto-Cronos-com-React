import MainTamplate from '../../components/templates/MainTemplate';
import CountDown from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import Container from '../../components/Container';
import { useEffect } from 'react';

const Home = () => {

   useEffect(() => {
      document.title = 'Chronos Pomodoro'
    }, [])

  return (
    <MainTamplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm/>
      </Container>
    </MainTamplate>
  );
}

export default Home 