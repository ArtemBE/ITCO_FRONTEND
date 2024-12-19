import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'



export default function Project(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = function(){
    console.log(props.project);
    dispatch({
      type: "edit_id",
      payload: props.project.project_id
    });
    navigate('/createProject');
  }
  return (
    <div className="project" onClick={handleClick}>
      {props.project.project_name}
      <input type="checkbox" className="project__checkbox" onClick={e=>e.stopPropagation()} />
    </div>
  )
}
