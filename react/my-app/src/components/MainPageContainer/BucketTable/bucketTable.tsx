import './bucketTable.css';
import React, { useState, useEffect } from 'react';
import BucketItem from './BucketItem/BucketItem';
import bucketItems from '../../../interfaces/bucketItems';

function BucketTable() {

    const [Buckets, setBuckets] = useState<bucketItems[]>([]);

    const fetchBuckets = () => {
        fetch(process.env.REACT_APP_SERVER_URL + "api/buckets/getallbuckets", {mode: 'cors'})
        .then((response) => response.json())
        .then(data => {
            setBuckets(data);
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchBuckets()
      }, []);
      
    return (
        <div>
            <div className="bucketTable">
                {Buckets.map((element, i) => (
                    <BucketItem key={i} callback={fetchBuckets} id={element.id} color={element.color} name={element.name} items={element.items}></BucketItem>
                ))}
            </div>
        </div>
    );
}

export default BucketTable;