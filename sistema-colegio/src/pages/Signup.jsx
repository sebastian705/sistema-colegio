import React from 'react'
import { useStudents } from '../contexts/store';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import AuthMaster from '../layout/AuthMaster';

const Signup = () => {
  const { signup, token } = useStudents();
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => signup(data);
  if (token) return (<Navigate to='/dashboard' />)
  return (
    <>
      <AuthMaster>
        <h2>Crea tu cuenta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label >Nombre</label>
            <input {...register("name")} />
          </div>
          <div >
            <label>Email</label>
            <input {...register("email")} />
          </div>
          <div >
            <label>Contraseña</label>
            <input {...register("password")} type="password" />
          </div>
          <div >
            <label >Repetir Contraseña</label>
            <input {...register("password_confirmation")} type="password" />
          </div>
          <a href="/">Iniciar Sesión</a>
          <input type="submit" value='Registrarse' />
        </form>
      </AuthMaster>
    </>
  )
}

export default Signup