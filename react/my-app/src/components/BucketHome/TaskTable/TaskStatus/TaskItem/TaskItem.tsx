import * as React from 'react';
import taskItems from '../../../../../interfaces/taskItems';
import './TaskItem.css';


function TaskItem(params: taskItems) {

    const handleChangeState = () => {

        let newState: number;
        if(params.state == 1 || params.state == 2) {
            newState = params.state + 1;
        } else {
            newState = params.state
        }

        fetch(process.env.REACT_APP_SERVER_URL + "api/Items/UpdateItem", {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: params.id,
                bucketId: params.bucketId,
                title: params.title,
                description: params.description,
                priority: params.priority,
                state: newState,
            }),
          })
          .then(() => params.callback());
          window.location.reload();

    }

    console.log(params.id);
    
    return (
        <div className="taskItem">
            <p>{params.title}</p>
            <div className="arrows">
                {params.priority == 1 ? <img src="../../../priority-down.svg" className="priority-low"/> : ""}
                {params.priority == 2 ? <img src="../../../priority-left.svg" className="priority-normal"/> : ""}
                {params.priority == 3 ? <img src="../../../priority-up.svg" className="priority-high"/> : ""}
                <img onClick={handleChangeState} src="../../../right-arrow.svg" className="state-arrow"/>
            </div>

        </div>
    );
}

export default TaskItem;