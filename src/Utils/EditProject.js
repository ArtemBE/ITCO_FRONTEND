async function EditProject(project){

    const data = project;
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