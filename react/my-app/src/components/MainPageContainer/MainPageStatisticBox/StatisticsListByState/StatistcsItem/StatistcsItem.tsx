import * as React from 'react';
import bucketStatistics from "../../../../../interfaces/bucketStatistics";
import "./StatisticsItem.css";

function StatisticsItem(params: bucketStatistics) {
    return (
        <div className="statisticsItem">
            <div className="colorfullBall" style={{backgroundColor: params.color}}></div>
            <div>{params.name}: {params.value}</div>
        </div>
    );
}

export default StatisticsItem;