import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';
import { Formulario2 } from './components/Formulario2';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />

      <h2>UseState</h2>
      <Counter />

      <Usuario />
      <hr />

      <h2>UseEffect - UseRef</h2>

      <TimerPadre />
      <hr />

      <h2>UseReducer</h2>

      <ContadorRed />
      <hr />

      <h2>Custom Hooks</h2>

      <Formulario />
      <hr />
      <br />
      <Formulario2 />
      <hr />
    </>
  );
}

export default App;
