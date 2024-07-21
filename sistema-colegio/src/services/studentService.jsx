import axios from "axios";

const endpoint = 'http://localhost:8000/api/students';

export const getStudents = () => axios.get(endpoint);
export const getStudent = (id) => axios.get(`${endpoint}${id}`);
export const createStudents = (student) => axios.post(endpoint, student);
export const editStudent = (id, student) => axios.put(`${endpoint}${id}`, student);
export const deleteStudent = (id) => axios.delete(`${endpoint}${id}`);