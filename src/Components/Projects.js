import React, { useEffect, useState } from 'react'
import Navlinks from './Navlinks'
import Project from './Project'
import AddProject from '../Utils/AddProject'
import DeleteProjects from '../Utils/DeleteProjects'
import GetProjects from '../Utils/GetProjects'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router'
//import AddProject2 from '../Utils/AddProject2'

export default function Projects() {
  const [projectList, setProjectList] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    //GetProjects().then(res=>setProjectList(res))

    const fetchProjects = async () => {
      try {
        const result = await GetProjects(); // Выполняем асинхронный запрос
        setProjectList(result); // Обновляем состояние
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <>
      <Navlinks/>
      <div className="projects" onClick={()=>GetProjects()}>
        {projectList?.map(item=><Project project={item} key={item.project_id} />)}
      </div>
    </>
  )
}
