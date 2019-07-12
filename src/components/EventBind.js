import React, {Component} from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'hello'
    }
  }

  render() {
    return <div>
    <p>{this.state.message}</p>
    <button>Click</button>
    </div>
  }
}

export default EventBind