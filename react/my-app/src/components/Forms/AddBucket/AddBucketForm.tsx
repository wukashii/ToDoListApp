import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import IconButton from '../../buttons/iconButton';
import './AddBucketForm.css';
import { FaWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function AddBucketForm() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [maxItems, setMaxItems] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlerBackToBucket = () => {
    navigate("/")
  }

  let handleSubmit = async () => {

    try {
      fetch(process.env.REACT_APP_SERVER_URL + "api/Buckets/CreateBucket", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          description: description,
          color: color,
          maxItems: maxItems
        }),
        headers: {'Content-Type': 'application/json'}
      })

    } catch (err) {
      console.log(err);
    }
    // navigate("/");
  };


  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
      <h1>New bucket</h1>
      <FaWindowClose className="clickable" onClick={handlerBackToBucket} style={{height: "2rem", width: "2rem", position: "absolute", top: "0.5rem", right: "0.6rem", filter: "invert(25%) sepia(44%) saturate(2613%) hue-rotate(218deg) brightness(95%) contrast(86%)"}}/>

        <div className="inputsContainer">

          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            value={color}
            placeholder="Color"
            onChange={(e) => setColor(e.target.value)}
          >
            <option selected value="empty">Choose a color</option>
            <option value="Green">Green</option>
            <option value="Pink">Pink</option>
            <option value="Brown">Brown</option>
            <option value="Yellow">Yellow</option>
          </select>

          <input
            type="text"
            value={maxItems}
            placeholder="MaxItems"
            onChange={(e) => setMaxItems(e.target.value)}
          />
        </div>
        <div className='formButtons'>

          <IconButton onClick={handlerBackToBucket} icon='../../../plus.svg' text="Cancel"/>
          <input type="submit" value="Save"/>
        </div>
      </form>
    </div>

  );
}


