import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '659c02c044msh4d7e6745b4a6a9fp139203jsna2d4218eadd1'
    },
  });
    
  return data;
}
