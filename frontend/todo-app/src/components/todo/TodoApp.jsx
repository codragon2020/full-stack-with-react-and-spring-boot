import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import withNavigation from './WithNavigation';
import withParams from './withParams';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import ListTodosComponent from './ListTodosComponent';
import WelcomeComponent from './WelcomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';

class TodoApp extends Component {
	render() {
		const LoginComponentWithNavigation = withNavigation(LoginComponent);
		const WelcomeComponentWithParams = withParams(WelcomeComponent);
		const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
		return (
			<div className="TodoApp">
				<Router>
					<HeaderComponentWithNavigation />
					<Routes>
						<Route path="/" element={<LoginComponentWithNavigation />} />
						<Route path="/login" element={<LoginComponentWithNavigation />} />
						<Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>} />
						<Route
							path="/welcome/:name"
							element={
								<AuthenticatedRoute>
									<WelcomeComponentWithParams />
								</AuthenticatedRoute>
							}
						/>
						<Route
							path="/todos"
							element={
                                <AuthenticatedRoute>
                                    <ListTodosComponent />
                                </AuthenticatedRoute>
                            }
						/>
						<Route path="*" element={<ErrorComponent />} />
					</Routes>
					<FooterComponent />
				</Router>
			</div>
		);
	}
}


export default TodoApp;
