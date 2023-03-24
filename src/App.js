import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greating';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponeneteA from './components/container/componentA';
import { name } from 'tar/lib/types';

function App() {

  const contactPrueba = {
    name: 'Victor',
    lastname: 'Lorencio Garcia',
    email: 'muniain18@hotmail.com',
    inline: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { /* Componente propio Greetig.jsx */}
        {/* <Greating name="Muni"></Greating> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Muni"></GreetingF> */}
        {/* Componente de listado de tareas*/}
        {/* <TaskListComponent></TaskListComponent> */}
        <ComponeneteA contact = {contactPrueba}/>
      </header>
    </div>
  );
}

export default App;
