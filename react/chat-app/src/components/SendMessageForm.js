import React, { Component } from 'react';

class SendMessageForm extends Component {
	constructor() {
		super()
		this.state = {
			message: ''
		}
	}

	handleInputChange = (e) => {
		this.setState({
			message: e.target.value
		})	
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.sendMessage(this.state.message)
		this.setState({
			message: ''
		})
	}

	render() {
		if (!this.props.currentRoomId) return null

		return (
			<div className="send-message-form" >
				<form onSubmit={this.handleSubmit}>
					<input 
						onChange={this.handleInputChange}
						value={this.state.message}
						placeholder="Write a message..."
						type="text"
					/>
				</form>
			</div>
		)
	}
}

export default SendMessageForm;