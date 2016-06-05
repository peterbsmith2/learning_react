import React from 'react';
import ReactDOM from 'react-dom'

// A class can have state
class App extends React.Component {
  constructor() {
    // gives context for this within component
    super()
    this.state = { txt: 'this is the state txt', cat: 0 }
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
        <input
          type="text"
          onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }

}

// Validates the props
App.propTypes = {
  txt: React.PropTypes.string,
}

// if there is no prop explicitly passed to the App component use this instead
App.defaultProps = {
  txt: 'this is the default txt'
}

ReactDOM.render(
  <App txt="this is the props text"/>,
  document.getElementById('app')
)

export default App
