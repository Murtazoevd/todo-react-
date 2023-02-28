
import React, { Component } from "react";
import Ccom from "./Ccom/Ccom";
import Dcom from "./Dcom/Dcom";

class Secound extends Component {
  render() {
    const { cVal, dVal } = this.props;
    return (
      <div style={{ width: "40%", height: "90%", border: "1px solid black" }}>
        <h1>2-component</h1>
        <Ccom cVal={cVal} />
        <Dcom dVal={dVal} />
      </div>
    );
  }
}

export default Secound;