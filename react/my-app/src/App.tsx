import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPageContainer from './components/MainPageContainer/mainPageContainer';
import TaskPageContainer from './components/BucketHome/TasksPageContainer/taskPageContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBucketForm from './components/Forms/AddBucket/AddBucketForm';
import AddTaskForm from './components/Forms/AddTask/AddTaskForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPageContainer />}/>
        <Route path='/bucket' element={<TaskPageContainer />}>
          <Route path=':bucketId' element={<TaskPageContainer />}/>

        </Route>
        <Route path='/AddTask' element={<AddTaskForm />}>
          <Route path=':bucketId' element={<AddTaskForm/>}/>
        </Route>

        <Route path='/AddBucket' element={<AddBucketForm/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <MainPageContainer />
<hr style={{marginTop: "10rem"}}/>
<TaskPageContainer />
<hr style={{marginTop: "10rem"}}/>
<AddBucketForm /> */}