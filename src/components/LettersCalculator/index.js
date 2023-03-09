// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onClickFindLength = event => {
    const newText = event.target.value
    this.setState({searchInput: newText})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length

    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input-element" id="label-element">
            Enter the phrase
          </label>
          <input
            id="input-element"
            type="text"
            className="input-container"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.onClickFindLength}
          />
          <p className="para-element">No.of letters: {count}</p>
        </div>
        <div className="img-container">
          <img
            className="img-element"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
