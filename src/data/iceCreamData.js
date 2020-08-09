import axios from 'axios';

export const getMenu = async () => {
  const response = await axios.get('/api/menu');
  return response.data.sort((a, b) => {
    if (a.iceCream.name < b.iceCream.name) {
      return -1;
    }
    if (a.iceCream.name > b.iceCream.name) {
      return -1;
    }
    return 0;
  }); 
}