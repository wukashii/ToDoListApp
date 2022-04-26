import React from 'react';
import StatisticBox from '../../MainPageContainer/MainPageStatisticBox/statisticbox';
import BucketTable from '../../MainPageContainer/BucketTable/bucketTable';
import './taskPageContainer.css';
import BucketStatisticBox from '../BucketStatisticBox/bucketstatisticbox';
import TaskTable from '../TaskTable/TaskTable';
import AddBucketForm from '../../Forms/AddBucket/AddBucketForm';

function TaskPageContainer() {
    return (<div>
        <BucketStatisticBox/>
        <TaskTable />
    </div>);
}

export default TaskPageContainer;