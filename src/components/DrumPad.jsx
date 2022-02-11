import React, { Component } from 'react'

const blue = "#022cdd"
const white ="#FFFFFF"

const activeStyle = {
    background: blue,
    height: 77,
    marginTop: 13,
    color: white
};

const inactiveStyle = {
    marginTop: 10,
};

class DrumPad extends Component {
    constructor(props) {
        super(props)

        this.state = {
            padStyle: inactiveStyle,
            value : 0
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }

    activatePad = () => {
    
        if (this.props.power) {
            if (this.state.padStyle.background === blue) {
                this.setState({
                    padStyle: inactiveStyle
                });
            } else {
                this.setState({
                    padStyle: activeStyle
                });
            }
        } else if (this.state.padStyle.marginTop === 13) {
            this.setState({
                padStyle: inactiveStyle
            });
        } else {
            this.setState({
                padStyle: {
                    height: 77,
                    marginTop: 13,
                    background: blue,
                    color : white
                }
            });
        }
    }

    playSound = () => {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.volume = this.props.volume
        sound.play();
        this.activatePad();
        setTimeout(() => this.activatePad(), 100);
        this.props.updateDisplay(this.props.clipId);
    }

    render() {
        return (
            <div
                className='drum_pad'
                id={this.props.clipId}
                onClick={this.playSound}
                style={this.state.padStyle}
            >
                <audio
                    className='clip'
                    id={this.props.keyTrigger}
                    src={this.props.clip}
                />
                {this.props.keyTrigger}
            </div>
        )
    }
}

export default DrumPad