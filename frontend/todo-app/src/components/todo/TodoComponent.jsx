import React, { Component } from "react";
//import TodoDataService from "../../api/todo/TodoDataService";

class TodoComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            id: this.props.params.id, //REACT-6
            //id: this.props.match.params.id,
        }
        
        // this.onSubmit = this.onSubmit.bind(this)
    }

    // onSubmit(values) {
 
    //     //OTHER CODE
     
    //     if (this.state.id === -1) {
    //         TodoDataService.createTodo(username, todo)
    //             .then(() => this.props.navigate('/todos')) //REACT-6
    //         //this.props.history.push('/todos')
    //     } else {
    //         TodoDataService.updateTodo(username, this.state.id, todo)
    //             .then(() => this.props.navigate('/todos'))//REACT-6
    //         //this.props.history.push('/todos')
    //     }
    // }
    render() {
        return(
            <div>Todo Component for id - {this.props.params.id}</div>
        )
        
    }
}

export default TodoComponent