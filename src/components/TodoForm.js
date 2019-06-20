import React, {Component} from 'react';
import TextBox from './TextBox';
import ComboBox from './ComboBox';
import {getPriorityList} from '../utils/Utils'



class TodoForm extends Component {

    constructor(props) {
        super(props);

         //Las referencias permite obtener el estado de un componente
        this.ownerRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.priorityRef = React.createRef();
    }

    render() {
        const priorityList = getPriorityList(this.props.tasks);

        return (
            <div className="w-25 mt-4">
                <form>
                    <TextBox type="text" placeholderId="Owner" ref={this.ownerRef}></TextBox>
                    <TextBox type="text" placeholderId="Description" ref={this.descriptionRef}></TextBox>
                    <ComboBox items={priorityList} ref={this.priorityRef}></ComboBox>

                    <div className="form-group">
                        <button
                            name="createTaskBtn"
                            className="btn btn-success mt-4 w-100"
                            onClick={this.handleOnClick}>Agregar Tarea
                        </button>
                    </div>
                </form>
        </div>
        );
    }   


    handleOnClick = (e) => {
        e.preventDefault();
        console.log(e.target.name + " has been Clicked");
        
        const owner = this.ownerRef.current.state.text;
        const description = this.descriptionRef.current.state.text;
        const priority = this.priorityRef.current.state.value;

        console.log("Owner: " + owner);
        console.log("Description: " + description);
        console.log("Priority: " + priority);

        const newTask = {
            'id': (this.props.tasks.length+1)
            , 'description': description
            , 'owner': owner
            , 'priority': priority
        }
        

        /*
         * El evento handleAddTask fue enviado desde
         * el componente padre como referencia
         */
        this.props.handleAddTask(newTask);
    }
}

export default TodoForm;