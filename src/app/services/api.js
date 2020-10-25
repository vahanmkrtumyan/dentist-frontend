import axios from "axios";
import localStorageService from "./localStorageService";
import API from "../helpers/API";

class JwtAuthService {
  createClient = async (data) => {
    const response = await API.post("api/client", data);
    return response.data.client;
  };
}

export default new JwtAuthService();
