import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			message: '',
			email: '',
			sent: false,
			buttonText: 'Send Email'
		}
	}

	formSubmit = (e) => {
		e.preventDefault()

		this.setState({
			buttonText: '... Sending'
		})

		let data = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message
		}

		axios.post('https://kai-email-server-5asvzig1h.now.sh/', data)
		.then( res => {
			this.setState({ sent: true }, this.resetForm())
		})
		.catch( () => {
			console.log('Message not sent')
		})
	}

	resetForm = () => {
		this.setState({
			name: '',
			message: '',
			email: '',
			buttonText: 'Message Sent'
		})
		document.getElementById("submit-button").disabled = true;
	}

	render(){
	return(
		<form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
		  <label className="field-name" htmlFor="message-name">name</label>
		  <input onChange={e => this.setState({ name: e.target.value})} name="name" className="name-input" type="text" placeholder="contact name" value={this.state.name}/>

		  <label className="field-name" htmlFor="message-email">email</label>
		  <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="name-input" type="email" placeholder="example@email.com" required value={this.state.email} />

		  <label className="field-name" htmlFor="message-input">message</label>
		  <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="please write your message here" value={this.state.message} required/>

		  <div className="button-container">
		      <button id='submit-button' type="submit" className="form-button">{ this.state.buttonText }</button>
		  </div>
		</form>
		);
	}
}

export default Form;