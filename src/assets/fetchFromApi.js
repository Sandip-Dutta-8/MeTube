// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// export const fetchFromApi = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  method: 'GET',
  // params: {
  //   maxResults: 50,
  // },
  headers: {
    'X-RapidAPI-Key': '2a27089de5mshd4fcbf8eab63c58p166c04jsn11cddfd6f8dc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {

  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const data = await response.json();
    //console.log(data.items);
    return data;
    
  } catch (error) {
    console.error(error);
  }
}