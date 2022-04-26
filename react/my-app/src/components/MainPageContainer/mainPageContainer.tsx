import React from 'react';
import StatisticBox from './MainPageStatisticBox/statisticbox';
import BucketTable from './BucketTable/bucketTable';
import './mainPageContainer.css';

function MainPageContainer() {
    return (<div>
        <StatisticBox/>
        <BucketTable/>
    </div>);
}

export default MainPageContainer;