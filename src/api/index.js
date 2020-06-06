import axios from 'axios';

const url = 'https://api.coincap.io/v2';

export const fetchMarket = async () => {
  try {
    const { data: { data } } = await axios.get(`${url}/assets/{{id}}/history
    `);
 
    console.log(data);
    return data;
  } catch (error) { 
    
  }
}