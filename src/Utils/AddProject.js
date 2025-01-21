async function AddProject(project){
    //const [name, setName] = useState('');
    //const [response, setResponse] = useState(null);

    const data = {
        project_id: project.project_id,
        project_name: project.project_name,
        project_description: project.project_description,
        project_image: project.project_image
    };

    const res = await fetch('/api', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    console.log(5);

    const result = await res.json();
    console.log(result);
    return result;
}

export default AddProject;