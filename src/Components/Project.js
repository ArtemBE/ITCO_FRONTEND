import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'



export default function Project(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = function(){
    //console.log(props.project);
    dispatch({
      type: "edit_id",
      payload: props.project.project_id
    });
    navigate('/createProject');
  }
  return (
    <NavLink to={`/createProject/${props.project.project_id}`}>
      <div className="project">
        {props.project.project_name}
        <input onChange={e=>e.target.checked?
                        dispatch({type: 'select', payload: props.project.project_id}):
                        dispatch({type: 'unselect', payload: props.project.project_id})
                      } type="checkbox" className="project__checkbox" onClick={e=>e.stopPropagation()} />
      </div>
    </NavLink>
    
  )
}
