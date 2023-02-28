import React, { Component } from 'react';

class Dcom extends Component {
    // pluseBTN = ()=>{
    //     let a = this.props.aVal
    //     a++
    //     this.props.aValPluse(a)
    // }
    render() {
        return (
            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <div>
                    <p>Dcom</p>
                    <div>
                        <button onClick={this.minuseBTN}>-</button>
                        <button onClick={this.props.aValPluse}>+</button>
                    </div>
                </div>
                <h3>{this.props.dVal}</h3>
            </div>
        );
    }
}

export default Dcom;