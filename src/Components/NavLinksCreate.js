import React from 'react'
import {NavLink} from 'react-router-dom'
import AddProject from '../Utils/AddProject'
import { useDispatch, useSelector } from 'react-redux'
import EditProject from '../Utils/EditProject'
import DeleteImage from '../Utils/DeleteImage'
import AddImage from '../Utils/AddImage'

export default function NavLinksCreate() {
  let project = useSelector(state=>state)
  const dispatch = useDispatch();
  return (
    <nav className="navlinks createProject-navlinks">
            <ul>
                <li><NavLink to="/">Вернуться</NavLink></li>
                <li><a href="#" onClick={()=>{
                  if(project.project_id==-1){
                    AddProject(project).then(({new_id})=>{
                      console.log(project.checkbox);
                      if(project.checkbox){
                        DeleteImage(new_id)
                        .then(()=>dispatch({type: 'setImagePath', payload: 'http://localhost:4006/image/'+new_id+'.jpg'}));
                      }
                      else if(project.image){
                        AddImage(project.image, new_id)
                        .then(()=>dispatch({type: 'setImagePath', payload: 'http://localhost:4006/image/'+new_id+'.jpg'}));
                      }
                    }).then(()=>alert('Проект добавлен'))
                  }else{
                    EditProject({...project, project_id: project.project_id}).then(()=>{
                      if(project.checkbox){
                        DeleteImage(project.project_id)
                        .then(()=>dispatch({type: 'setImagePath', payload: 'http://localhost:4006/image/'+project.project_id+'.jpg'}));
                      }
                      else if(project.image){
                        AddImage(project.image, project.project_id)
                        .then(()=>dispatch({type: 'setImagePath', payload: 'http://localhost:4006/image/'+project.project_id+'.jpg'}));
                      }
                    }).then(()=>alert('Изменения сохранены'))
                  }
                  
                  //dispatch({type: 'edit_id', payload: project})
                }}>Сохранить</a></li>
            </ul>
        </nav>
  )
}
