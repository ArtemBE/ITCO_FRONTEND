async function EditProject(project){

    const data = {
        project_id: project.project_id,
        project_name: project.project_name,
        project_description: project.project_description,
        project_image: project.project_image
    };
    const res = await fetch('http://localhost:4006/api', {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await res.text();
    console.log("edit project вызвали")
}

export default EditProject;