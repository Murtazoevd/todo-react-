import React, { Component } from "react";
import Acom from "./Acom/Acom";
import Bcom from "./Bcom/Bcom";

class First extends Component {
  render() {
    const { aVal, bVal, aValPluse } = this.props;
    return (
      <div style={{ width: "40%", height: "90%", border: "1px solid black" }}>
        <h1>1-component</h1>
        <Acom aVal={aVal} aValPluse={aValPluse}/>
        <Bcom bVal={bVal} />
      </div>
    );
  }
}

export default First