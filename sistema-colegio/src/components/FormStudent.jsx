import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useStudents } from '../contexts/store';

function FormStudent({ isEdit, setIsEdit, id }) {
  const { addStudent, getStudent, student } = useStudents();
  const { register, handleSubmit, setValue, reset } = useForm()
  const onSubmit = (data) => {

    addStudent(data)
  }
  reset()
  if (isEdit) {
    useEffect(() => {
      getStudent(id)
    }, [])

    setValue('nombre', student.nombre);
    setValue('apellido', student.apellido);
    setValue('email', student.email);
    setValue('fecha_nacimiento', student.fecha_nacimiento);
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