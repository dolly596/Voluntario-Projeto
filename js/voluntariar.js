document.getElementById('photo-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const previewImage = document.getElementById('photo-preview');
        previewImage.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
