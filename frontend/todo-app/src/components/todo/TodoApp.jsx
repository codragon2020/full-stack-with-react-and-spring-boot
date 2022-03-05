import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation';
import withParams from './withParams';

class TodoApp extends Component {
	render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
		return (
			<div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />}/>
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                </Router>
			</div>
		);
	}
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos :
            [
                {id: 1, description : 'Learn React'},
                {id: 2, description : 'Learn Java'},
                {id: 3, description : 'Learn Spring Boot'}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome to my Website {this.props.params.name}</div>
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. Contact website support.</div>
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
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
            
        } else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
            console.log(this.state)
    }

	render() {
		return (
			<div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
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

export default TodoApp;
