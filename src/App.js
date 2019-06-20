import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import tasks from './data/dummy-data';
import Tasks from './components/Tasks';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();


    /*
     * El estado es un atributo contenedor de atributos
     * que en otros lenguajes serian obtenidos solo por
     * medio de setters y getters, con la diferencia que
     * en lugar de usar getters usas referencias (React.createRef())
     * y que en lugar de usar setters, usas eventos, ya que un
     * atributo del estado solo puede ser modificado por un evento
     * del mismo componente donde el atributo fue definido  
     */
    this.state = {
      'name': 'Tareas'
      ,'tasks': tasks
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>{this.state.name}</span>  <span className="badge badge-primary">{this.state.tasks.length}</span>
        </header>
  
        <div className="App-body">
          <TodoForm tasks={this.state.tasks} handleAddTask={this.handleAddTask}></TodoForm>
          <Tasks items={this.state.tasks} handleRemoveTask={this.handleRemoveTask}></Tasks>
        </div>
      </div>
    );
  }

  /*
    /*
     * En React solo se puede cambiar el estado de un componente a través de un evento
     * que pertence al mismo componente. Dado este hecho si se desea cambiar el estado
     * de un componente desde un componente hijo es necesario pasar el evento del componente
     * padre al componente hijo como una prop

    Nota: las props son objetos inmutables de solo lectura, de ahi que no se
    pueda modificar el estado de un componente padre desde un componente hijo
  */
  handleAddTask = (task) => {
    const tasks = this.state.tasks;
    tasks.push(task);

    this.setState({'tasks':tasks});
  }

  handleRemoveTask = (index) => {
    if(window.confirm('Estas seguro de Eliminarlo')) {
      const tasks = this.state.tasks.filter((e, i) => {
        return i !== index;
      });
  
      this.setState({'tasks': tasks});
    }
  }
}

export default App;
