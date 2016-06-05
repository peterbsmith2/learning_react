import React from 'react'
import ReactDOM from 'react-dom'
import MathInput from './MathInput'
class MathBox extends React.Component {
  constructor() {
    super()
    this.update = this.update.bind(this)
    this.state = {
      first: 0,
      second: 0,
      operation: '+',
      solution: 0
    }
  }

  update(e) {
    let first = parseInt(ReactDOM.findDOMNode(this.refs.mi.refs.first).value)
    let second = parseInt(ReactDOM.findDOMNode(this.refs.mi.refs.second).value)
    let operation = ReactDOM.findDOMNode(this.refs.select).value
    let solution

    if(operation === "+") {
      solution = first + second
    }
    else if(operation === "-") {
      solution = first - second
    }
    else if(operation === "*") {
      solution = first * second
    }
    else if(operation === "/") {
      solution = first / second
    }
    this.setState({
      first: first,
      second: second,
      operation: operation,
      solution: solution
    })
  }

  render() {
    return (
      <div>
        <select ref="select" defaultValue="+" onChange={this.update}>
          <option value="-">Subtract</option>
          <option value="+">Add</option>
          <option value="*">Multiply</option>
          <option value="/">Divide</option>
        </select>
        <MathInput
          ref="mi"
          update={this.update}
          operation={this.state.operation}
          solution={this.state.solution}
        />
    </div>
    )
  }

}

export default MathBox
