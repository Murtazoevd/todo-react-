import React, { Component } from 'react'
import mak from '../images/mbp14-silver-select-202110 1.png'
import mack from '../images/mbp14-spacegray-select-202110 1.png'
import './Figma.css'

export default class Figma extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <div className="top">
            <h1>Supercharged for pros.</h1>
            <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.</p>
          </div>
          <div className="center">
            <div className="left">
              <img src={mack} alt="" />
            </div>
            <div className="right">
              <h1>Macbook Pro</h1>
              <p>White</p>
              <h3>1.999$</h3>
            </div>
          </div>
          <div className="down">
            <div className="color">
              <button>White</button>
              <button>Space Grey</button>
            </div>
            <div className="Ssd">
              <h3>512 GB SSD</h3>
              <h3>1 TB SSD</h3>
              <h3>2 TB SSD</h3>
              <h3>4 TB SSD</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
