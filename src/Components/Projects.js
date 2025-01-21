import React, { useEffect, useState } from 'react'
import Navlinks from './Navlinks'
import Project from './Project'
import AddProject from '../Utils/AddProject'
import DeleteProjects from '../Utils/DeleteProjects'
import GetProjects from '../Utils/GetProjects'
import { useDispatch } from 'react-redux'
//import AddProject2 from '../Utils/AddProject2'

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    //GetProjects().then(res=>setProjectList(res))
    dispatch({type: "unselectAll"});
    const fetchProjects = async () => {
      try {
        const result = await GetProjects();
        setProjectList(result);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <>
      <Navlinks set={setProjectList} list={projectList}/>
      <div className="projects" onClick={()=>GetProjects()}>
        {projectList?.map(item=><Project project={item} key={item.project_id} />)}
      </div>
    </>
  )
}
