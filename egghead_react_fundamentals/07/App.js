import React from 'react';
import ReactDOM from 'react-dom'

// A class can have state
class App extends React.Component {
  constructor() {
    // gives context for this within component
    super()
    this.state = { red: 0, green: 0, blue: 0}
    this.update = this.update.bind(this)
  }

  // custom update method (not react)
  update(e) {
    //setState does not need the entire state, only the part you want to set,
    //notice that I am not passing in cat from this.state (above). setState does
    //not overwrite state.cat
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  // render method must return single html element which wraps all others
  render() {
    return (
      // the onChange is a react method
      <div>
        <Slider
          ref="red"
          update={this.update}
        />
        {this.state.red}
        <br />
        <Slider
          ref="green"
          update={this.update}
        />
        {this.state.green}
        <br />
        <Slider
          ref="blue"
          update={this.update}
        />
        {this.state.blue}
        <br />
      </div>
    )
  }

}

class Slider extends React.Component {
  render() {
    return (
      <div>
      <input type="range"
      ref="inp"
      min="0"
      max="255"
      onChange={this.props.update}
        />
      </div>
    )
  }
}

export default App
