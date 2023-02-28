import React, { Component } from "react";

class Todos extends Component {
  state = {
    newText: "",
  };
  changeInput = (event)=>{
      let {newText} = this.state
      newText = event.target.value
      this.setState({
            newText
      })
  }
  deleteTodo=(index)=>{
      this.props.delTODO(index)
  }

  addTODO = () => {
    let { newText } = this.state;
    let thisHour = new Date().getHours();
    let thisMinute = new Date().getMinutes();
   if(newText !== ""){
      let obj = {
            text: newText,
            date: thisHour + ":" + thisMinute,
            id: this.props.todos.length + 1,
          };
          this.props.addTodo(obj);
          this.setState({
            newText: ""
          })
   }
  };
  render() {
    const { todos } = this.props;
    return (
      <div>
        <div>
          <input type="text" onChange={this.changeInput} value={this.state.newText} required />
          <button onClick={this.addTODO}>add todo</button>
        </div>
        <div>
          {todos.length !== 0
            ? todos.map((item, index) => (
                <div
                  style={{
                    width: "200px",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p>{item.text}</p>
                    <p>{item.date}</p>
                  </div>
                  <button onClick={()=>this.deleteTodo(index)}>x</button>
                </div>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default Todos;