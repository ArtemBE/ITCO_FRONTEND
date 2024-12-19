async function AddImage(img, id){
    console.log('http://localhost:4006/api/image/' + id);
    if (!img) {
        console.error('No file selected');
        return;
    }
    const formData = new FormData();
    formData.append('image', img);
    try {
        const response = await fetch('http://localhost:4006/api/image/' + id, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.text();
            console.log('Image uploaded successfully:', result);
        } else {
            console.error('Failed to upload image:', response.statusText);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}
export default AddImage;