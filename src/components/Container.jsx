import React, { Component } from 'react'
import * as Unicons from '@iconscout/react-unicons';
import Keycodes from "./keys.json"
import DrumsContainer from './DrumsContainer';

const fadeOutStyle = {
  display: "none",
  transition: "0.5s"
}

const fadeInStyle = {
  display: "flex",
  transition: "0.5s"
}

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: String.fromCharCode(160),
      value: 50,
      numberStyle: fadeOutStyle,
      power: true,
      soundVolume : 0.5,
      progressHeight: {
        height: 150
      },
      toggle: {
        right: 2
      },
      bgColor: {
        background: "#022cdd"
      }
    }
  }


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    switch (event.keyCode) {
      case 37:
      case 39:
        this.toggleIndicator();
        break;
      default:
        break;
    }
  }

  handleChange = (event) => {
    this.setState({
      value: Number(event.target.value),
      soundVolume : Number((event.target.value / 100).toFixed(2)),
      progressHeight: {
        height: event.target.value * 3
      }
    });

  }
  showVol = () => {
    this.setState({
      numberStyle: fadeInStyle
    });
  }
  hideVol = () => {
    this.setState({
      numberStyle: fadeOutStyle
    })
  }

  toggleIndicator = () => {
    if (this.state.power) {
      this.setState({
        power: false,
        toggle: {
          left: 2
        },
        bgColor: {
          background: "#333"
        }
      })
    }
    else {
      this.setState({
        power: true,
        toggle: {
          right: 2
        },
        bgColor: {
          background: "#022cdd"
        }
      })
    }
  }
  
  displayClipName = (name) => {
    if (this.state.power){
      this.setState({
        display: name
      });
    }
  }


  render() {
      
    return (
      <div className="pads_container">
        <div className="display_bar">{this.state.display.toUpperCase()}</div>
        <div className="three_dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <DrumsContainer
          ClipVolume={this.state.soundVolume}
          Containerpower={this.state.power}
          ClipDetails={Keycodes.keys}
          UpdateDisplay={this.displayClipName}
        />

        
        <div className="controls">
          <div className="slide_control" onMouseEnter={this.showVol}
            onMouseLeave={this.hideVol}>
            <div className="progress">
              <span className="progress_bar" style={this.state.progressHeight}></span>
            </div>
            <span style={this.state.numberStyle} className="value_details">{this.state.value}</span>
            <input type="range"
              maxValue={100}
              minValue={0}
              value={this.state.value}
              onChange={this.handleChange}

              className="volume_control"
            />
          </div>

          <div className="toggle" style={this.state.bgColor}>
            <div className="indicator" onClick={this.toggleIndicator} style={this.state.toggle}>
              {this.state.power ?
                <Unicons.UilMusicNote className="toggle_icon" /> :
                <Unicons.UilMusicTuneSlash className="toggle_icon" />
              }
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Container