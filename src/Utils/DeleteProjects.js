async function DeleteProjects(project_id_array){
    const data = { project_id: project_id_array};
    console.log('ВШВ')
    const res = await fetch('http://localhost:4006/api', {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    console.log(5);

    const result = await res.text();
    console.log(result);
}

export default DeleteProjects;