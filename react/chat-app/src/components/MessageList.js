import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    if (!this.props.currentRoomId) {
      return (
        <div className="message-list">
          <div className="join-room">
            Please join a room to start chatting
            </div>
        </div>
      )
    }

    return (
      <div className="message-list">
        {this.props.messages.map((message, i) => {
          return (
            <Message 
              key={i} 
              username={message.senderId} 
              message={message.text}
            />
          )
        })}
      </div>
    )
  }
}

export default MessageList;