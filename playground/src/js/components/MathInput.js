import React from 'react'

class MathInput extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          ref="first"
          onChange={this.props.update}
        />
        <h2>{this.props.operation}</h2>
        <input
          type="text"
          ref="second"
          onChange={this.props.update}
        />
        <h2>{'='}</h2>
        <h2>{this.props.solution}</h2>
      </div>
    )
  }
}

export default MathInput
