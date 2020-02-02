
import React, { Component } from 'react';
import './App.css';
import Palette from './Palette'
import seedPalettes from './seedPalettes'
import { generatePalette } from './colorHelpers'

class App extends Component {
  
  render() {
    console.log(generatePalette(seedPalettes[0]))
    return (
      <div>
        <Palette {...seedPalettes[1]}/>
      </div>
    )
  }
}

export default App
