import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'subscribe'}

  changeText = () => {
    const {text} = this.state
    if (text === 'subscribe') {
      this.setState(prevstate => ({text: 'subscribed'}))
    } else {
      this.setState(prevstate => ({text: 'subscribe'}))
    }
    console.log(text)
  }

  render() {
    const {text} = this.state
    console.log(text)
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="desc">Thank You!Happy Learning</p>
        <button className="button" type="button" onClick={this.changeText}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
