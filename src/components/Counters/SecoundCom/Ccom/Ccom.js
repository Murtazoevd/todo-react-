import React, { Component } from 'react';

class Ccom extends Component {
    // pluseBTN = ()=>{
    //     let a = this.props.aVal
    //     a++
    //     this.props.aValPluse(a)
    // }
    render() {
        return (
            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <div>
                    <p>Ccom</p>
                    <div>
                        <button onClick={this.minuseBTN}>-</button>
                        <button onClick={this.props.aValPluse}>+</button>
                    </div>
                </div>
                <h3>{this.props.cVal}</h3>
            </div>
        );
    }
}

export default Ccom;