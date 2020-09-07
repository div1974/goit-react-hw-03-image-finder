import axios from 'axios';

const fetchPicturesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=16947860-09cbfc9ac0ccf00e2776d07e9&image_type=photo&orientation=horizontal&per_page=12`
    //   `https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}&hitsPerPage=10`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchPicturesWithQuery,
};