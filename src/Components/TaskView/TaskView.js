import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import childSupport from'../../images/birdHouse.png'
import './TaskView.css';
const TaskView = ({task}) => {
    const [filter,setFilter]=useState('');
    useEffect(()=>{
    fetch('/task?filter='+filter)
    .then(res =>res.json())
    .then(data =>setFilter(data))
    },[filter])
    console.log(task)
    return (
        <div className="col-md-3 part" style={{height:'450px',weight:'200px',}} >
            <img style={{height:'400px',weight:'200px',marginleft:'5px'}} src={require (`../../images/${task.pic}`)} alt="" />
            
            <Link to="/login"><h3> {task.name} </h3></Link>
        </div>
    );
};

export default TaskView;