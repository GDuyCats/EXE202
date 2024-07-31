import axios from 'axios';

const API_BASE_URL = 'https://ohecaa.azurewebsites.net/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllOrder = async () => {
  try {
    const response = await apiClient.get('/Orders/ViewTotalAllOfOrder');
    return response.data.data.totalOrder;
    
  } catch (error) {
    console.error('Error fetching revenue data:', error);
    throw error;
  }
};