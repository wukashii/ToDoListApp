import './TaskTable.css';
import * as React from 'react';
import TaskStatusItem from './TaskStatus/TaskStatusItem';
import TaskStatusItemParams from '../../../interfaces/params/TaskStatusItemParams';

function TaskTable() {

    const mockStatusColumnData: TaskStatusItemParams[] = [
        {
            color: "#FEF77C",
            columnName: "To Do",
        },
        {
            color: "#59DCE1",
            columnName: "In Progress",
        },
        {
            color: "#DDEE7A",
            columnName: "Done",
        },
        {
            color: "#E54C91",
            columnName: "Cancelled",
        }
    ]
    return (
        <div>
            <div className="taskTable" >
                {mockStatusColumnData.map((element, i) => (
                    <TaskStatusItem key={i} color={element.color} columnName={element.columnName}></TaskStatusItem>
                ))}
            </div>
        </div>
    );
}

export default TaskTable;