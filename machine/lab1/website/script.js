// Hàm upload ảnh
function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            addImageToGallery(e.target.result);
        }
        reader.readAsDataURL(file);
        fileInput.value = ''; // Reset file input
    } else {
        alert("Vui lòng chọn một ảnh để tải lên!");
    }
}

// Hàm thêm ảnh vào khu vực hiển thị
function addImageToGallery(src) {
    const imageGallery = document.getElementById('imageGallery');
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    
    const label = document.createElement('span');
    label.classList.add('image-label');
    label.innerText = "Kết quả bài tập";

    const img = document.createElement('img');
    img.src = src;
    img.alt = "Ảnh đã tải lên";

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Xóa ảnh";
    deleteButton.onclick = function() {
        imageGallery.removeChild(imageContainer);
    }

    imageContainer.appendChild(label);
    imageContainer.appendChild(img);
    imageContainer.appendChild(deleteButton);
    imageGallery.appendChild(imageContainer);
}
