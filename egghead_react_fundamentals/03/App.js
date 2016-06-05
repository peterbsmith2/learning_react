import React from 'react';

// A class can have state
class App extends React.Component {
  // render method must return single html element which wraps all others
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    )
  }

}



export default App
