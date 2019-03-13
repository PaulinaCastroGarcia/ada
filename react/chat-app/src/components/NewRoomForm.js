import React from 'react'

class NewRoomForm extends React.Component {
  constructor() {
    super()
    this.state= {
      roomName: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      roomName: e.target.value
    })
  }

  handleSubmit = () => {
    if (this.state.roomName !== '') {
      this.props.createRoom(this.state.roomName)
      this.setState({
       roomName: ''
      })
    }
  }

  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.roomName}
            type="text"
            placeholder="Create a room"
          />
        </form>
      </div>
    )
  }
}

export default NewRoomForm