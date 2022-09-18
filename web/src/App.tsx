import { Router } from './router';
import './styles/main.css';
interface AdData {
  hourEnd: string,
  hoursStart: string,
  id: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string,
  yearsPlaying: number
}

function App() {
  return (
    <>
      <Router />
    </>
  )
}

export default App
