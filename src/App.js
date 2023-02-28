import React, { Component } from "react";
import Todos from "./components/Todowork/Todos";
// import Todos from "./components/Todos/Todos";

class App extends Component {
  state = {
    todos: [
      // {
      //   text: "1",
      //   date: "",
      //   id: ""
      // },
    ],
  };
  delTODO = (index) => {
    let { todos } = this.state;
    todos.splice(index, 1);
    this.setState({
      todos,
    });
  };
  addTodo = (obj) => {
    let { todos } = this.state;
    todos.push(obj);
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div>
        <Todos
          todos={this.state.todos}
          addTodo={this.addTodo}
          delTODO={this.delTODO}
        />
      </div>
    );
  }
}

export default App;