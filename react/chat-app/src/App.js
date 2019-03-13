import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';

import './App.css';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';


import { tokenUrl, instanceLocator } from './config'

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      joinedRooms: [],
      joinableRooms: [],
      currentRoomId: null
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'monica',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser /*to create methods*/
      this.getRooms()
    })
    // .catch(err => {console.log("err: ", err)})
  }

  getRooms = () => {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
  // .catch(err => {console.log("err: ", err)})
  }

  subscribeToRoom = (roomId) => {
    if (roomId !== this.state.currentRoomId) {
      this.setState({
        messages: [],
        currentRoomId: roomId
      })

      this.currentUser.subscribeToRoom({
        roomId: roomId,
        initialId: 1,
        direction: 'older',
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
      .then(() => {
        this.getRooms()
      })
    }
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoomId
    })
  }

  createRoom = (name) => {
    this.currentUser.createRoom(
      {
        name
      })
    .then(room => this.subscribeToRoom(room.id))
    // .catch()
  }

  render() {
    return (
      <div className="App">
        <RoomList 
          rooms={[...this.state.joinedRooms, ...this.state.joinableRooms]}
          subscribeToRoom={this.subscribeToRoom}  
          currentRoomId={this.state.currentRoomId}
        />

        <MessageList 
          messages={this.state.messages}
          currentRoomId={this.state.currentRoomId}  
        />

        <NewRoomForm createRoom={this.createRoom}/>

        <SendMessageForm 
          sendMessage={this.sendMessage}
          currentRoomId={this.state.currentRoomId}  
        />
      </div>
    )
  }
}

export default App;
