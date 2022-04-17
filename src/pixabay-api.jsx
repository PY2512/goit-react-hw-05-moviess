function fetchImages(searchImageName, page) {
    const API_KEY = '25800358-94bb5f0dd44193561e070ec24';

    return fetch(
        `https://pixabay.com/api/?q=${searchImageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then(responce => {
        if (responce.ok){
            return responce.json();
        }

        return responce;
    });
}

export default fetchImages;