const photoLayout = (() => {
    const showPhotos = (photos) => {
        const wrap = document.getElementById("photo-wrap");
        // 값 초기화
        let text = ``;
        photos
            .map((photo) => photo.thumbnailUrl)
            .forEach((thumbnailUrl) => {
                text += `<div><img src="${thumbnailUrl}"></div>`;
            });
        wrap.innerHTML = text;
    };

    return { showPhotos: showPhotos };
})();
