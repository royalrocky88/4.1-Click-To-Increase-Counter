// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(preState => {
      console.log(`${preState.count}`)
      return {count: preState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count-value">{count}</span> times
        </h1>
        <p className="describe">Click the button to increase the count!!</p>
        <button className="btn" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
