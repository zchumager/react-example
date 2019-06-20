import React from 'react';


//Staless component (componente sin estado)
function Tasks(props) {
    return (
        <div className="cards col-lg">
            <div className="row">
                {props.items.map((e, i)=> {
                let value = e.priority === "low"? "secondary": e.priority === "medium"? "warning": "danger";

                return (
                    <div className="card w-25 mt-4 ml-4 d-inline-block" key={i}>
                        <h5 className="card-header text-muted">{e.owner}</h5>
                        <div className="card-body">
                            <p className="card-text text-primary">{e.description}</p>
                            <p className={"badge badge-"+value}>{e.priority}</p>
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-danger"
                                onClick={props.handleRemoveTask.bind(this, i)}>Eliminar Tarea</button>
                        </div>
                    </div>);
                })}
            </div>
        </div>
    );
}

export default Tasks;