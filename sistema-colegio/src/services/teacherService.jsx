import axios from "axios";

const endpoint = 'http://localhost:8000/api/students';

export const getTeachers = () => axios.get(endpoint);
export const getTeacher = (id) => axios.get(`${endpoint}${id}`);
export const createTeacher = (student) => axios.post(endpoint, student);
export const editTeacher = (id, student) => axios.put(`${endpoint}${id}`, student);
export const deleteTeacher = (id) => axios.delete(`${endpoint}${id}`);