import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const list = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Todo: list
    };
  }

  toggleThing = id => {
    const newTodoList = this.state.Todo.map(thing => {
      if (thing.id === id) {
        return {
          ...thing,
          completed: !thing.completed
        };
      } else {
        return thing;
      }
    });
    this.setState({
      Todo: newTodoList
    });
  };

  addThing = thingtask => {
    const newThing = {
      task: thingtask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      Todo: [...this.state.Todo, newThing]
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h2>ToDo List:</h2>
          <TodoForm addThing={this.addThing} />
        </div>
        <TodoList list={this.state.Todo} toggleThing={this.toggleThing} />
      </div>
    );
  }
}

export default App;
