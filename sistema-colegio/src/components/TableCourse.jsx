import React, { useEffect, useState } from 'react'
import { useStudents } from '../contexts/store'

function TableCourse() {
  const { teachers, getTeachers } = useStudents();
  useEffect(() => {
    getTeachers();
  }, [])

  return (
    <table className="table">
      <caption>
        <h2>Tabla de Profesores</h2>
      </caption>
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
          teachers.map((teacher) => {
            return (<tr key={teacher.id_profesor}>
              <td>{teacher.nombre}</td>
              <td>{teacher.apellido}</td>
              <td>{teacher.email}</td>
              <td>{teacher.fecha_nacimiento}</td>
              <td>
                <button className="btn-edit" onClick={() => isEdit(true)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className="btn-delete" onClick={() => deleteStudent(teacher.id_profesor)}><i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>)
          })
        }
      </tbody>
    </table>
  )
}

export default TableCourse