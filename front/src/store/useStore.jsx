import axios from "axios";
import { create } from "zustand";
const endpoint = 'http://localhost:8000/api';

export const useStore = create((set) => ({
  students: [],
  getStudents: () => axios.get(`${endpoint}/students`),
  getStudent: (id) => axios.get(`${endpoint}/students/${id}`),
  addStudent: (student) => axios.post(`${endpoint}/students`, student),
  editStudent: (id, student) => axios.put(`${endpoint}/students/${id}`, student),
  deleteStudent: (id) => axios.delete(`${endpoint}/students/${id}`),
}))