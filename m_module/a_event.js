const button = document.getElementById("get-photos");

button.addEventListener("click", () => {
    // 사용
    photoService.getPhotos(photoLayout.showPhotos);
});
