
import React, { Component } from 'react';
import './App.css';
import Palette from './Palette'
import seedPalettes from './seedPalettes'

class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
         
  //   }
  // }

  render() {
    return (
      <div>
        <Palette {...seedPalettes[1]}/>
      </div>
    )
  }
}

export default App
