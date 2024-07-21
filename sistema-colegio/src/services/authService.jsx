import axios from "axios";

const endpoint = 'http://localhost:8000/api';
const login = (user) => axios.post(`${endpoint}/login`, user)
const signup = (user) => axios.post(`${endpoint}/register`, user);
const logout = () => axios.post(`${endpoint}/logout`, {}, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})
const user = () => axios.get(`${endpoint}/user`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})