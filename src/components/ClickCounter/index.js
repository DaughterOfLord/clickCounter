/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class clickCounter extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {count: 0}

  onClickMe = () => {
    this.setState(prevState => {
      console.log(`previous count value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>
          times
        </h1>
        <p>Click the button to increase the count!</p>
        <div>
          <button className="button" onClick={this.onClickMe}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default clickCounter
