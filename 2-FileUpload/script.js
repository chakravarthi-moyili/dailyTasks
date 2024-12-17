const uploadForm = document.getElementById('upload-form');
const uploadButton = document.getElementById('upload-button');
const uploadStatus = document.getElementById('upload-status');
const documentInput = document.getElementById('document');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const file = documentInput.files[0];

  if (file) {
    uploadStatus.textContent = 'Uploading.....';
    uploadStatus.style.color = 'orange';

    setTimeout(() => {
      uploadStatus.textContent = 'Upload Successful';
      uploadStatus.style.color = 'green';
    }, 2000);
  } else {
    uploadStatus.textContent = 'Please select a file';
    uploadStatus.style.color = 'red';
  }
});