import React from 'react'

class WordsToShare extends React.Component {
  constructor() {
    super()
    this.update = this.update.bind(this)
    this.state = {
      txt: ''
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    return (
      <div>
        <input onChange={this.update} />
        <h2>{this.state.txt}</h2>
      </div>
    )
  }
}

export default WordsToShare
