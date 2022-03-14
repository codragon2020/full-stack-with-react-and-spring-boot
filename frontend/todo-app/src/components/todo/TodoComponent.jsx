import React, { Component } from "react";
import moment from 'moment'
import { Field, Form, Formik } from 'formik'
//import TodoDataService from "../../api/todo/TodoDataService";

class TodoComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            id: this.props.params.id, //REACT-6
            description : 'Learn Forms',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
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
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
        
    }
}

export default TodoComponent