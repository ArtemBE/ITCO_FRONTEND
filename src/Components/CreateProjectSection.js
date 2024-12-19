import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetProject from '../Utils/GetProject';
import AddImage from '../Utils/AddImage';

export default function CreateProjectSection() {
    const dispatch = useDispatch();
    const project_id = useSelector(state=>state.project_id);
    const project_name = useSelector(state=>state.project_name);
    const project_description = useSelector(state=>state.project_description);
    const project_image = useSelector(state=>state.project_image);
    const [loading, setLoading] = useState(true);
    console.log(project_id);
    const ref = useRef();

    useEffect(()=>{
        //GetProjects().then(res=>setProjectList(res))
    
        const fetchProject = async () => {
          try {
            const result = await GetProject(project_id);
            return result;
          } catch (error) {
            console.error('Error fetching projects:', error);
          }
        };
        if(project_id!=-1) fetchProject().then(res=>{
            dispatch({type: "edit_project", payload: res})
            setLoading(false);
            console.log("state ne -1")
        })
        else console.log("state -1") || setLoading(false);
    }, []);

    if(!loading) return (
        <div className="createProjectSection">
            <div className="createProject">
            <label> Название: 
                <input type="text" className="createProject__name-field" defaultValue={project_name} onChange={e=>dispatch({
                    type: "edit_name", payload: e.target.value
                })} />
            </label>
            <label> Описание:
                <textarea name className="createProject__description-field" defaultValue={project_description} onChange={e=>dispatch({
                    type: "edit_description", payload: e.target.value
                })}  />
            </label>
            <div className="createProject__photo">
                <img src={'http://localhost:4006/image/'+project_id+'.jpg'} alt={project_id} />
            </div>
            <label> Фото
                <input ref={ref} type="file" className="createProject__input-photo" accept="image/*" />
            </label>
            <label onClick={()=>AddImage(ref.current.files[0], project_id)}>Удалить фотографию <input type="checkbox" /></label>
            </div>
        </div>
    )
}
