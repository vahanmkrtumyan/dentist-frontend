import axios from 'axios';
import localStorageService from './localStorageService';
import API from '../helpers/API';

class JwtAuthService {
  // You need to send http request with email and passsword to your server in this method
  // Your server will return user object & a Token
  // User should have role property
  // You can define roles in app/auth/authRoles.js
  loginWithEmailAndPassword = async (email, password) => {
    const response = await API.post('api/auth/login', { email, password });
    this.setSession(response.data.token);
    // Set user
    this.setUser(response.data.user);
    return response.data;
  };

  logout = () => {
    this.setSession(null);
    this.removeUser();
  };

  // Set token to all http request header, so you don't need to attach everytime
  setSession = (token) => {
    if (token) {
      localStorage.setItem('jwt_token', token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
      localStorage.removeItem('jwt_token');
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  // Save user to localstorage
  setUser = (us) => {
    localStorageService.setItem('auth_user', us);
  };
  // Remove user from localstorage
  removeUser = () => {
    localStorage.removeItem('auth_user');
  };
}

export default new JwtAuthService();
