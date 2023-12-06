// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'dark'}

  changeMode = () => {
    const {mode} = this.state
    if (mode === 'dark') {
      this.setState({mode: 'light'})
    } else {
      this.setState({mode: 'dark'})
    }
  }

  render() {
    const {mode} = this.state
    let modeContainer = null
    if (mode === 'dark') {
      modeContainer = (
        <div className="dark-mode-container">
          <h1 className="dark-heading">Click to Change Mode</h1>
          <button
            type="button"
            className="dark-mode-button"
            onClick={this.changeMode}
          >
            Light Mode
          </button>
        </div>
      )
    } else {
      modeContainer = (
        <div className="light-mode-container">
          <h1 className="light-heading">Click to Change Mode</h1>
          <button
            type="button"
            className="light-mode-button"
            onClick={this.changeMode}
          >
            Dark Mode
          </button>
        </div>
      )
    }
    return <div className="bg-container">{modeContainer}</div>
  }
}

export default LightDarkMode
