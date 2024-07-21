import axios from "axios";

const endpoint = 'http://localhost:8000/api/courses';

export const getCourses = () => axios.get(endpoint);
export const getCourse = (id) => axios.get(`${endpoint}${id}`);
export const createCourse = (course) => axios.post(endpoint, course);
export const editCourse = (id, course) => axios.put(`${endpoint}${id}`, course);
export const deleteCourse = (id) => axios.delete(`${endpoint}${id}`);