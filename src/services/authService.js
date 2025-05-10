import axios from "axios";

const API_URL = "http://localhost:8000/api";

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const authService = {
  login,
};

export default authService;
