async function GetProject(project_id){
    const res = await fetch('/api/'+project_id, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    });
    const result = await res.json();
    return result;
}

export default GetProject;