import React from 'react'
import { useStudents } from '../contexts/store';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import AuthMaster from '../layout/AuthMaster';

const Login = () => {
  const { login } = useStudents();
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => login(data);
  console.log(localStorage.getItem('token'))
  const token = localStorage.getItem("token");
  if (token) return (<Navigate to='/dashboard' />)
  return (
    <>
      <AuthMaster>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input {...register("email")} />
          </div>
          <div>
            <label>Contraseña</label>
            <input {...register("password")} type="password" />
          </div>
          <a href="/register">Registrate</a>
          <input type="submit" value='Iniciar Sesión' />
        </form>
      </AuthMaster>
    </>
  )
}

export default Login