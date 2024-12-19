async function AddProject(project){
    //const [name, setName] = useState('');
    let project_name = 'artem';
    let project_description = 'artem project';
    let project_image = 'ds';
    //const [response, setResponse] = useState(null);

    const data = project;

    const res = await fetch('http://localhost:4006/api', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    console.log(5);

    // Парсим JSON-ответ от сервера
    const result = await res.json();
    //setResponse(result);
    console.log(result);
    /* } catch (error) {
    console.error('Error:', error);
    //setResponse({ status: 'error', message: 'Something went wrong!' });
    } */
    console.log("add");
}

export default AddProject;