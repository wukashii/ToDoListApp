import * as React from 'react';
import ReactDOM from 'react-dom';
import iconButtonParams from '../../interfaces/params/iconButtonParams';
import './iconButton.css';

function IconButton(params: iconButtonParams) {
    let btnClass = params.text == "Save" ? "blueButton" : "";
    return (
        <>
            <button className={`btn clickable ${btnClass}`} onClick={params.onClick} ><img src={params.icon}/>{params.text}</button>
        </>
    );
}

export default IconButton;