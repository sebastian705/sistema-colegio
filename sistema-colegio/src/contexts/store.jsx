import { createContext, useContext, useState } from "react";
import axios from 'axios'

const StudentContext = createContext();

export const useStudents = () => useContext(StudentContext);

const endpoint = 'http://localhost:8000/api';

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /* students */
  function addStudent(data) {
    axios.post(`${endpoint}/students`, data)
      .then(res => setStudents([...students, res.data]));
  }
  function deleteStudent(id) {
    axios.delete(`${endpoint}/students/${id}`);
    setStudents(students.filter(student => student.id != id));
  }

  function getStudents() {
    axios.get(`${endpoint}/students`)
      .then(res => setStudents(res.data.data));
  }
  function getTeachers() {
    axios.get(`${endpoint}/teachers`)
      .then(res => setTeachers(res.data.data));
  }
  function editStudent(data) {
    axios.put(`${endpoint}/students`)
      .then(res => setStudent(res.data))
  }
  function getStudent(id) {
    axios.get(`${endpoint}/students/${id}`)
      .then(res => setStudent(res.data));
  }
  const login = (data) => {
    axios.post(`${endpoint}/login`, data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.access_token);
        setIsAuthenticated(true);
      })
      .catch(err => console.log(err));
  };
  const signup = (data) => {
    axios.post(`${endpoint}/register`, data)
      .then(res => console.log(res.data));
  }
  const logout = () => {
    axios.post(`${endpoint}/logout`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        localStorage.removeItem('token');
      });
  }
  const user = () => {
    axios.get(`${endpoint}/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
  }
  return (
    <StudentContext.Provider
      value={{
        students, setStudents, getStudents,
        addStudent, editStudent, deleteStudent, isAuthenticated, getStudent,
        setIsAuthenticated, login, logout, user, signup, teachers, getTeachers, student
      }}>
      {children}
    </StudentContext.Provider>
  );
};