import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp';
// import Counter from './components/counter/Counter';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
      </div>
    );
  }
}

export default App;

