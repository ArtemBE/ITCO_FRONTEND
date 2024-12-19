async function DeleteImage(id){
    //console.log('http://localhost:4006/api/image/' + id);
    try {
        const response = await fetch('http://localhost:4006/api/image/' + id, {
            method: 'DELETE',
            body: JSON.stringify({id})
        });

        const result = await response.text();
        console.log(result);

    } catch (error) {
        console.error('Error delete image:', error);
    }
}
export default DeleteImage;