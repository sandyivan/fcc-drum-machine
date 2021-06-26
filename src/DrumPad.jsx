import { render } from '@testing-library/react'
import React from 'react'

class DrumPad extends React.Component {
    constructor(props){
        super(props)
        this.audio = React.createRef();
        
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown)
    }
    

    componentWillUnmount() {
        document.addEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = (e) => {
        
        
        //console.log(e.keyCode)
        let unicodeChar = e.which || e.keyCode;
        if(unicodeChar === this.props.letter.charCodeAt()) {
            this.handleClick(this.props.letter);
            
            
        }
    }

    handleClick = (display) => {
        //console.log(this.audio.current.currentTime)
        this.audio.current.play()
        this.audio.current.currentTime = 0
        this.props.handleDisplayChange(display)
    }

    

    render() {
        let { id, letter, src} = this.props
        return(
            <a id={id} onClick={() => this.handleClick(id)} className="drum-pad" >
                <span>{letter}</span>
                <audio className = "clip" id={letter} src={src}  ref={this.audio}></audio>
            </a>
        )
    }
}

export default DrumPad;