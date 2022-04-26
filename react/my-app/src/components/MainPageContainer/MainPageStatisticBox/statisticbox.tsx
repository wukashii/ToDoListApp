import React from 'react';
import StatisticsList from './StatisticsListByState/StatisticsList';
import './statisticbox.css'
import { FaPlusCircle, FaInfoCircle } from 'react-icons/fa';
import IconButton from '../../buttons/iconButton';
import { useNavigate } from 'react-router-dom';


function StatisticBox() {
    const navigate = useNavigate();

    let title: string = "Welcome in ListSmarter";

    const handleAddBucket = () => {
        navigate("/AddBucket/")
    }

    return (
    <div>
        <h1>{title}</h1>
        <StatisticsList/>
        <div className="bucketControlPanel">
            <p>Browse your bucket</p>
            <div className="addBucketPanel">
                <div className="addBucketButtonInfo"><FaInfoCircle style={{marginRight: "0.5rem", height: "1rem",
                width: "1rem"}}/>Maximum limit of buckets has been reached</div>

                <IconButton onClick={handleAddBucket} icon='plus.svg' text="Add new bucket"/>
            </div>
        </div>
    </div>
    );
}

export default StatisticBox;