import React from 'react';
import ReactDOM from 'react-dom'

// A class can have state
class App extends React.Component {
  // render method must return single html element which wraps all others
  render() {
    let txt = this.props.txt
    return (
      <h1>{txt}</h1>
    )
  }

}

// Validates the props
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
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
