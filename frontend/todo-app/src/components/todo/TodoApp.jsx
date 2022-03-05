import React, { Component } from 'react';

class TodoApp extends Component {
	render() {
		return (
			<div className="TodoApp">
				<LoginComponent />
			</div>
		);
	}
}

class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'IndiaPaleAle',
			password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
		};
		this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
	}

	handleChange(event) {
		console.log(event.target.name);
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

    loginClicked() {
        if(this.state.username==='IndiaPaleAle' && this.state.password==='Test123$') {
            console.log('Successful')
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
            
        } else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
            console.log(this.state)
    }

	render() {
		return (
			<div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
				User Name:
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				Password:
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<button onClick={this.loginClicked}>Login</button>
			</div>
		);
	}
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default TodoApp;
