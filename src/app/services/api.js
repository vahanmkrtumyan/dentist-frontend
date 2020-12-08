import axios from 'axios';
import localStorageService from './localStorageService';
import API from '../helpers/API';

class JwtAuthService {
  createClient = async (data) => {
    const response = await API.post('api/client', data);
    return response.data.client;
  };

  getClients = async (search) => {
    console.log(search);
    const response = await API.get('api/client', {
      params: {
        name: search,
      },
    });
    return response.data.clients;
  };
}

export default new JwtAuthService();
