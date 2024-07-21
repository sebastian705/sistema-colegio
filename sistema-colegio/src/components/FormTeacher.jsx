import React from 'react'
import { useForm } from 'react-hook-form';
import { useStudents } from '../contexts/store';

function FormStudent({ setShow }) {
  const { addStudent } = useStudents();
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    addStudent(data);
    setShow(false);
  }

  return (
    <>
      <form className="form-student" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input {...register("nombre")} />
        </div>
        <div>
          <label>Apellido</label>
          <input {...register("apellido")} />
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} />
        </div>
        <div>
          <label>Fecha de Nacimiento</label>
          <input {...register("fecha_nacimiento")} type='date' />
        </div>
        <input type="submit" />
      </form>
    </>
  )
}

export default FormStudent