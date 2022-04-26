import React, { useState, useEffect } from 'react';
import "./TaskStatusItem.css";
import TaskStatusItemParams from "../../../../interfaces/params/TaskStatusItemParams";
import TaskItem from './TaskItem/TaskItem';
import taskItems from '../../../../interfaces/taskItems';
import { useParams } from 'react-router-dom';

function TaskStatusItem(params: TaskStatusItemParams) {
    const [Tasks, setTasks] = useState<taskItems[]>([]);
    const { bucketId } = useParams();

    const fetchTasks = () => {
        fetch(process.env.REACT_APP_SERVER_URL + `api/Items/GetAllItemsByBucket?bucketId=${bucketId}`, {mode: 'cors'})
        .then((response) => response.json())
        .then(data => {
            setTasks(data);
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        fetchTasks()
      }, []);

    const putTaskByState = () => {
        switch(params.columnName) {
            case 'To Do':
                return 1;
            case 'In Progress':
                return 2;
            case 'Done':
                return 3;
            case 'Cancelled':
                return 4;
            default: 1
        };
    };

    const result = Tasks.filter(t => {
        if(t.state == putTaskByState())
            return t;
    })

    return (
        <div className="statusColumn" style={{backgroundColor: params.color}}>
            <h2>{params.columnName}</h2>
            {result.map((element, i) => (     
                <TaskItem key={i} title={element.title} priority={element.priority} state={element.state} id={element.id} bucketId={element.bucketId} description={element.description} callback={fetchTasks}></TaskItem>
            ))}
        </div>
    );
}

export default TaskStatusItem;