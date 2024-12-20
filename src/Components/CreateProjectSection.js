import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetProject from '../Utils/GetProject';
import AddImage from '../Utils/AddImage';
import DeleteImage from '../Utils/DeleteImage';

export default function CreateProjectSection() {
    const dispatch = useDispatch();
    const project_id = useSelector(state=>state.project_id);
    const project_name = useSelector(state=>state.project_name);
    const project_description = useSelector(state=>state.project_description);
    const project_image = useSelector(state=>state.project_image);
    let image_path = useSelector(state=>state.image_path);
    const [loading, setLoading] = useState(true);
    //console.log(project_id);
    let exist = useSelector(state=>state.image_path_exist);
    const ref = useRef();
    const img_ref = useRef();
    const checkbox_ref = useRef();

    function SetImageSRC(has){
        if(has){
            const file = ref.current.files[0];
            dispatch({type: 'setImage', payload: file});
            const reader = new FileReader();
            reader.onload = function(e){
                img_ref.current.src = e.target.result;
                dispatch({type: 'setImagePath', payload: e.target.result})
            }
            reader.readAsDataURL(file);
        }
        else{
            dispatch({type: 'setImage', payload: null});
            dispatch({type: 'setImagePath', payload: 'http://localhost:4006/image/'+project_id+'.jpg'});
            img_ref.current.src='http://localhost:4006/image/'+project_id+'.jpg';
            
        }
    }

    function checkImageExists(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true); // Изображение существует
            img.onerror = () => resolve(false); // Изображение не существует
            img.src = url; // Устанавливаем путь к изображению
        });
    }

    useEffect(()=>{
        //GetProjects().then(res=>setProjectList(res))
        console.log('path: '+image_path);
        dispatch({type: 'setImage', payload: null});
        dispatch({type: 'setCheckbox', payload: false});
        dispatch({type: 'setImagePath', payload: 'http://localhost:4006/image/'+project_id+'.jpg'});
        const fetchProject = async () => {
          try {
            const result = await GetProject(project_id);
            return result;
          } catch (error) {
            //console.error('Error fetching projects:', error);
          }
        };
        if(project_id!=-1) fetchProject().then(res=>{
            dispatch({type: "edit_project", payload: res})
            checkImageExists('http://localhost:4006/image/'+project_id+'.jpg')
            .then((res)=>{
                if(res) dispatch({type: 'setImagePathAdd', payload: 'http://localhost:4006/image/'+project_id+'.jpg'})
            })
            setLoading(false);
            //console.log("state ne -1")
        })
        else /* console.log("state -1") ||  */setLoading(false);
    }, []);

    function checkboxChange(e){
        if(e.target.checked) dispatch({type: 'setCheckbox', payload: true});
        else dispatch({type: 'setCheckbox', payload: false});
    }

    

    if(!loading) return (
        <div className="createProjectSection">
            <div className="createProject">
            <label /* onClick={()=>DeleteImage(project_id)} */> Название: 
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
                {(ref?.current?.files[0] || exist)?<img ref={img_ref} src={image_path} alt={project_id} />:<img ref={img_ref} src={""} alt={project_id} />}
            </div>
            <label> Фото
                <input onChange={(e)=>SetImageSRC(e.target.files[0])} ref={ref} type="file" className="createProject__input-photo" accept="image/*" />
            </label>
            <label /* onClick={()=>AddImage(ref.current.files[0], project_id)} */>Удалить фотографию 
                <input ref={checkbox_ref} type="checkbox" onChange={checkboxChange}/>
            </label>
            </div>
        </div>
    )
}
