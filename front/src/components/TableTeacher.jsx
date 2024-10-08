import React, { useEffect, useState } from 'react'
import { useStudents } from '../contexts/store'
import Modal from './Modal';
import FormTeacher from './FormTeacher';

function TableTeacher() {
  const { teachers, getTeachers } = useStudents();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getTeachers();
  }, [])

  return (
    <>
      <Modal title={'Agregar Curso'} setShow={setOpen} show={open}>
        <FormTeacher />
      </Modal>
      <div className="container-table">
        <div className="title">
          <h2>Profesores</h2>
          <button onClick={() => setOpen(true)}>Agregar</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Fecha de Nacimiento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              teachers?.map((teacher) => {
                return (<tr key={teacher.id}>
                  <td>{teacher.nombre}</td>
                  <td>{teacher.apellido}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.fecha_nacimiento}</td>
                  <td>
                    <button className="btn btn-edit" onClick={() => editStudent(teacher.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className="btn btn-delete" onClick={() => deleteStudent(teacher.id)}><i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableTeacher