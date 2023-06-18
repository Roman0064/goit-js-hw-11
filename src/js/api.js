import axios from 'axios';

const API_KEY = '37349806-fbd17cc6692905f34ac659bee';
const URL = 'https://pixabay.com/api/';

export async function getImages(searchQuery, pageCount) {
    const params = {
        params: {
            key: API_KEY,
            q: searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: pageCount,
            per_page: 40,
        },
    };
    const response = await axios.get(URL, params);
    return response.data;
}