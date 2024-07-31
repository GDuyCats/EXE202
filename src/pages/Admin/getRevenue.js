import axios from 'axios';

const API_BASE_URL = 'https://ohecaa.azurewebsites.net/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRevenue = async () => {
  try {
    const response = await apiClient.get('/Dashboards/GetTotalRevenue');
    return response.data;
  } catch (error) {
    console.error('Error fetching revenue data:', error);
    throw error;
  }
};
