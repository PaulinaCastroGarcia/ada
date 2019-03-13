import React, { Component } from 'react';

class RoomList extends Component {
  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id) /*to avoid the rooms changing order when a user first subscribes to a room */
    return (
      <div className="room-list">
        <h3>Rooms</h3>
        <ul>
          {orderedRooms.map((room) => {
            const active = this.props.currentRoomId === room.id ? 'active' : ''
            return(
              <li key={room.id} className={"room "  + active }>
                <a onClick={() => this.props.subscribeToRoom(room.id)} href="#"># {room.name}</a>
              </li>
            )
          })}
         </ul>
      </div>
    );
  }
}

export default RoomList;