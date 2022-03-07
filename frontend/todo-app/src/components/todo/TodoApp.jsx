import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import withNavigation from './WithNavigation';
import withParams from './withParams';

class TodoApp extends Component {
	render() {
		const LoginComponentWithNavigation = withNavigation(LoginComponent);
		const WelcomeComponentWithParams = withParams(WelcomeComponent);
		return (
			<div className="TodoApp">
				<Router>
					<HeaderComponent />
					<Routes>
						<Route path="/" element={<LoginComponent />} />
						<Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/logout" element={<LogoutComponent />} />
						<Route
							path="/welcome/:name"
							element={<WelcomeComponentWithParams />}
						/>
						<Route path="/todos" element={<ListTodosComponent />} />
						<Route path="*" element={<ErrorComponent />} />
					</Routes>
					<FooterComponent />
				</Router>
			</div>
		);
	}
}

class HeaderComponent extends Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark">
					<div>
						<a
							href="https://jmcginthyportfolio.netlify.app/"
							className="navbar-brand"
						>
							My Homepage
						</a>
					</div>
					<ul className="navbar-nav">
						<li>
							<Link className="nav-link" to="/welcome/IndiaPaleAle">
								Home
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/todos">
								Todos
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav navbar-collapse justify-content-end">
						<li>
							<Link className="nav-link" to="/login">
								Login
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/logout">
								Logout
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

class FooterComponent extends Component {
	render() {
		return (
            <footer className='footer'>
                <span className='text-muted'>All Rights Reserved 2022</span>
            </footer>
		);
	}
}

class LogoutComponent extends Component {
	render() {
		return (
			<>
				<h1>You are logged out</h1>
				<div className="container">Thank you for using our Application</div>
			</>
		);
	}
}

class ListTodosComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					description: 'Learn React',
					done: false,
					targetDate: new Date(),
				},
				{
					id: 2,
					description: 'Learn Java',
					done: false,
					targetDate: new Date(),
				},
				{
					id: 3,
					description: 'Learn Spring Boot',
					done: false,
					targetDate: new Date(),
				},
			],
		};
	}

	render() {
		return (
			<div>
				<h1>List Todos</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
			</div>
		);
	}
}

class WelcomeComponent extends Component {
	render() {
		return (
            <>
                <h1>Welcome!</h1>
                <div className='container'>
                    Welcome to my Website {this.props.params.name}
                    <br />
                    Manage your todos <Link to="/todos">here</Link>
			    </div>
            </>
        )
	}
}

function ErrorComponent() {
	return <div>An Error Occurred. Contact website support.</div>;
}

class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'IndiaPaleAle',
			password: '',
			hasLoginFailed: false,
			showSuccessMessage: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.loginClicked = this.loginClicked.bind(this);
	}

	handleChange(event) {
		console.log(event.target.name);
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	loginClicked() {
		if (
			this.state.username === 'IndiaPaleAle' &&
			this.state.password === 'Test123$'
		) {
			this.props.navigate(`/welcome/${this.state.username}`);
			// this.setState({showSuccessMessage:true})
			// this.setState({hasLoginFailed:false})
		} else {
			this.setState({ showSuccessMessage: false });
			this.setState({ hasLoginFailed: true });
		}
		console.log(this.state);
	}

	render() {
		return (
            <div>
                <h1>Login</h1>
                <div className='container'>
                    {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
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
                    <button className="btn btn-success" onClick={this.loginClicked}>
                        Login
                    </button>
                </div>
            </div>
		);
	}
}

export default TodoApp;
