import React, { useEffect, useState } from 'react';
import './bucketstatisticbox.css'
import { FaInfoCircle } from 'react-icons/fa';
import IconButton from '../../buttons/iconButton';
import bucketStatistics from '../../../interfaces/bucketStatistics';
import statisticsResponse from '../../../interfaces/statisticsResponse';
import { useParams } from 'react-router-dom';
import BucketStatistcsItem from './BucketStatistcsItem/BucketStatistcsItem';
import taskItems from '../../../interfaces/taskItems';
import { useNavigate } from 'react-router-dom';


function BucketStatisticBox() {
    const navigate = useNavigate();
    const {bucketId} = useParams();
    const [StatisticsByBucket, setStatisticsByBucket] = useState<bucketStatistics[]>([]);
    const [Buckets, setBuckets] = useState<taskItems[]>([]);

    const handleAddTask = () => {
        navigate("/AddTask/" + bucketId)
    }
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URL + `api/Stats/CountItemsByStateInBucket/${bucketId}`, {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => setStatisticsAfterResponse(response))
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URL + "api/Buckets/GetAllBuckets", {mode: 'cors'})
            .then((response) => response.json())
            .then(data => {
                setBuckets(data);
            })
            .catch((err) => console.log(err))
      }, []);
      

    const setStatisticsAfterResponse = (response: statisticsResponse) => {
        setStatisticsByBucket(
            [
                {
                    color: "#FEF445",
                    name: "To Do",
                    value: response.todoCount
                },
                {
                    color: "#2D9BF0",
                    name: "In Progress",
                    value: response.inProgressCount
                },
                {
                    color: "#8FD14F",
                    name: "Done",
                    value: response.doneCount
                },
                {
                    color: "#DA0063",
                    name: "Cancelled",
                    value: response.cancelledCount
                }
            ]
        )
    }

    return (
        <div className="bucketView">
            <div className="bucketHomeHeader">
                <div className="col-1">
                <h1>{Buckets.filter(b => b.id == bucketId).map((r => r.name))}</h1>
                <p>{Buckets.filter(b => b.id == bucketId).map(r => r.description)}</p>

                    
                </div>
                <div className="col-2">
                    <IconButton icon='../../../../edit.svg' text="Edit"/>
                    <IconButton icon='../../../../delete.svg' text="Delete"/>
                </div>
            </div>

            <p>Statistics:</p>
            <div className="statisticsItems">
                {StatisticsByBucket.map((element, i) => (
                    <BucketStatistcsItem key={i} color={element.color} name={element.name} value={element.value}></BucketStatistcsItem>
                ))}
            </div>
            <div className="addTaskSection">
                <div className="addBucketPanel">
                    <div className="addBucketButtonInfo"><FaInfoCircle style={{marginRight: "0.5rem", height: "1rem",
            width: "1rem"}}/>Maximum limit of tasks has been reached</div>
                    <IconButton onClick={handleAddTask} icon='../../../../plus.svg' text="Add new task"/>
                </div>
            </div>
        </div>
    );
}

export default BucketStatisticBox;