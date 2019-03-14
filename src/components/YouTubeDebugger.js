// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
     }
  }

  changeBitrate = () => {
    debugger
    this.setState({
    settings: {
      ...this.state.settings,
      bitrate: 12}
   }
  )}

  changeResolution = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      video: {
        ...this.state.video,
        resolution: '720p'
      }}
   })
  }

  render() {
    return (
      <div>
        <button id="bitrate" onClick={this.changeBitrate}>.bitrate</button>
        <button id="resolution" onClick={this.changeResolution}>.resolution</button>
      </div>
    )
  }
}
export default YouTubeDebugger
