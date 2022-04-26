import React, { useEffect, useState } from 'react';
import bucketStatistics from "../../../../interfaces/bucketStatistics";
import statisticsResponse from '../../../../interfaces/statisticsResponse';
import StatisticsItem from "./StatistcsItem/StatistcsItem";

function StatisticsList() {

const [Statistics, setStatistics] = useState<bucketStatistics[]>([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URL + "api/stats/countallitemsbystate", {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => setStatisticsAfterResponse(response))
        .catch((err) => console.log(err))
    }, [])    

    const setStatisticsAfterResponse = (response: statisticsResponse) => {
        setStatistics(
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
        <div>
            <p>Statistics:</p>
            <div className="statisticsItems">
                {Statistics.map((element, i) => (
                    <StatisticsItem key={i} color={element.color} name={element.name} value={element.value}></StatisticsItem>
                ))}
            </div>
        </div>
    );
}

export default StatisticsList;