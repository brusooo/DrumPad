import React, { Component } from 'react'
import DrumPad from './DrumPad';

class DrumsContainer extends Component {

    render() {
        let drumsContainer;
        if(this.props.Containerpower) {
            drumsContainer = this.props.ClipDetails.map((drumObj, i, keysArr) => {
                return (
                    <DrumPad
                        clip={keysArr[i].src}
                        clipId={keysArr[i].id}
                        keyCode={keysArr[i].keyCode}
                        keyTrigger={keysArr[i].keyTrigger}
                        power={this.props.Containerpower}
                        updateDisplay={this.props.UpdateDisplay}
                        volume={this.props.ClipVolume}
                    />
                );
            });
        } else {
            drumsContainer = this.props.ClipDetails.map((drumObj, i, keysArr) => {
                return (
                    <DrumPad
                        clip='#'
                        clipId={keysArr[i].id}
                        keyCode={keysArr[i].keyCode}
                        keyTrigger={keysArr[i].keyTrigger}
                        power={this.props.Containerpower}
                        updateDisplay={this.props.UpdateDisplay}
                        volume={this.props.ClipVolume}
                    />
                );
            });
        }
        return( 
            <div className='drumsContainer'>{drumsContainer}</div>
        );
    }
}

export default DrumsContainer