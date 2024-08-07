import { Outlet, Navigate } from "react-router-dom";
import { useStudents } from "../contexts/store";

export default function ProtectedRoute() {
  const { isAuthenticated } = useStudents();
  const token = localStorage.getItem('token');
  return  token ? <Outlet /> : <Navigate to='/' />;
}