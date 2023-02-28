import React, { Component } from 'react';

class Bcom extends Component {
    // pluseBTN = ()=>{
    //     let a = this.props.aVal
    //     a++
    //     this.props.aValPluse(a)
    // }
    render() {
        return (
            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <div>
                    <p>Bcom</p>
                    <div>
                        <button onClick={this.minuseBTN}>-</button>
                        <button onClick={this.props.bValPluse}>+</button>
                    </div>
                </div>
                <h3>{this.props.bVal}</h3>
            </div>
        );
    }
}

export default Bcom;