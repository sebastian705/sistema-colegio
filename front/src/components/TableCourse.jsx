import React, { useEffect, useState } from 'react'
import { useStudents } from '../contexts/store'

function TableCourse() {
  const { courses, getCourses } = useStudents();
  useEffect(() => {
    getCourses();
  }, [])

  return (
    <>
      <div className="container-table">
        <div className="title">
          <h2>Tabla de Profesores</h2>
          <button className='btn'>Agregar</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Creditos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              courses?.map((course) => {
                return (<tr key={course.id}>
                  <td>{course.nombre}</td>
                  <td>{course.descripcion}</td>
                  <td>{course.creditos}</td>
                  <td>
                    <button className="btn btn-edit" onClick={() => isEdit(true)}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className="btn btn-delete" onClick={() => deleteStudent(course.id)}><i className="fa-solid fa-trash"></i>
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

export default TableCourse