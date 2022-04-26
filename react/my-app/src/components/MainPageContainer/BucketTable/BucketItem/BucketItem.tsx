import React, { useEffect, useState } from 'react';
import bucketItems from "../../../../interfaces/bucketItems";
import "./BucketItem.css";
import { FaWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function BucketItem(params: bucketItems) {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate("/bucket/" + params.id)
    }


    let handleDeleteBucket = (e: React.ChangeEvent<any>, bucketId: number | undefined) => {
        e.stopPropagation();
    
            fetch(process.env.REACT_APP_SERVER_URL + `api/Buckets/DeleteBucket/${bucketId}`,{
                method:'DELETE',
            }).then(() => params.callback())
    }

    return (
        <div onClick={handleClick} className="bucketItem clickable" style={{backgroundColor: params.color}}>
            <h2>{params.name}</h2>
            <p>To Do: {params.items.filter(x => x.state == 1).length}</p>

            <div>
                <FaWindowClose onClick={(e) => handleDeleteBucket(e, params.id)}  style={{height: "1rem", width: "1rem", position: "absolute", bottom: "9px", right: "9px"}}/>
            </div>

        </div>
    );
}

export default BucketItem;