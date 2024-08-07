import { useEffect } from "react";
import { useStudents } from "../contexts/store";
import { useForm } from "react-hook-form";

const EditStudent = ({ id }) => {
  const { editStudent, getStudent, student } = useStudents();
  const { register, handleSubmit, setValue } = useForm()
  const onSubmit = (data) => editStudent(id, data);
  useEffect(() => {
    getStudent(id)
  }, [])

  setValue('nombre', student.nombre);
  setValue('apellido', student.apellido);
  setValue('email', student.email);
  setValue('fecha_nacimiento', student.fecha_nacimiento);
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
          <input {...register("fecha_nacimiento")} type='date' value={"2000-01-01"} />
        </div>
        <input type="submit" />
      </form>
    </>
  )
}

export default EditStudent