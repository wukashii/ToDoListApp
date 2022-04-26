import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import IconButton from '../../buttons/iconButton';
import './AddTaskForm.css';
import { FaWindowClose } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';


export default function AddTaskForm() {
  const {bucketId} = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handlerBackToBucketById = () => {
    navigate("/")
  }

  let handleSubmit = async () => {
    navigate("/");

    try {
      let res = await fetch(process.env.REACT_APP_SERVER_URL + "api/Items/CreateItem", {
        method: "POST",
        body: JSON.stringify({
          bucketId: bucketId,
          title: title,
          description: description,
          priority: parseInt(priority, 0),
          state: parseInt(state, 0),
          assignees: []
        }),
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {

        if (response.status == 200) {

            navigate("/bucket/" + bucketId);

        }

      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
      <h1>New task</h1>
      <FaWindowClose className="clickable" onClick={handlerBackToBucketById} style={{height: "2rem", width: "2rem", position: "absolute", top: "0.5rem", right: "0.6rem", filter: "invert(25%) sepia(44%) saturate(2613%) hue-rotate(218deg) brightness(95%) contrast(86%)"}}/>

        <div className="inputsContainer">

          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            value={priority}
            placeholder="Priority"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="empty">Choose a priority</option>
            <option value="1">Low</option>
            <option value="2">Normal</option>
            <option value="3">High</option>
          </select>

          <select
            value={state}
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          >
            <option value="empty">Choose a priority</option>
            <option value="1">ToDo</option>
            <option value="2">InProgress</option>
            <option value="3">Done</option>
            <option value="4">Cancelled</option>
          </select>
        </div>
        <div className='formButtons'>

          <IconButton onClick={handlerBackToBucketById} icon='../../../plus.svg' text="Cancel"/>
          <input type="submit" value="Save"/>
        </div>
      </form>
    </div>

  );
}
