import React from 'react'
import './App.css';

import {audioClip} from './audioClip'
import DrumPad from './DrumPad'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: ''
    }
  }

  handleDisplayChange = (display) => {
    //console.log(display)
    this.setState({ display })
  }


  render() {
    const textCenter = {
      textAlign: 'center'
    }
    return(
      <div id="drum-machine">
        <div className="container">
          <h1 style={textCenter}>Press or click</h1>
          <p style={textCenter} id="display">{this.state.display}</p>
          <div className="drum-pads">
            {
              audioClip.map(({id, letter, src}) => <DrumPad key={id} id={id} letter={letter} src={src} handleDisplayChange={this.handleDisplayChange}/>)
              
            }
          </div>
        </div>
      </div>
    )
  }
}


export default App;
