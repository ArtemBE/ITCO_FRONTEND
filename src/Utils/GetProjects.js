async function GetProjects(){
    //const data = {/* project_id: project_id_array*/};
    let res = await fetch('http://localhost:4006/api', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    });
    const result = await res.json();
    return result;
}

export default GetProjects;