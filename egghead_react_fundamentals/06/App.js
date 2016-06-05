import React from 'react';
import ReactDOM from 'react-dom'

// A class can have state
class App extends React.Component {
  constructor() {
    // gives context for this within component
    super()
    this.state = { txt: '' }
    this.update = this.update.bind(this)
  }

  // custom update method (not react)
  update(e) {
    //setState does not need the entire state, only the part you want to set,
    //notice that I am not passing in cat from this.state (above). setState does
    //not overwrite state.cat
    this.setState({txt: e.target.value})
  }
  // render method must return single html element which wraps all others
  render() {
    return (
      // the onChange is a react method
      <div>
        <Widget
          txt={this.state.txt}
          update={this.update}
          />
        <Widget
          txt={this.state.txt}
          update={this.update}
          />
      </div>
    )
  }

}

const Widget = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  )
}
export default App
