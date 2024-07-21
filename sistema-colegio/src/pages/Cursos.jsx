import React from 'react'
import HomeMaster from '../layout/HomeMaster'
import TableCourse from '../components/TableCourse'
import { useStudents } from '../contexts/store.jsx'

const Cursos = () => {
  const { students } = useStudents()
  return (
    <HomeMaster>
      <TableCourse />
      <select name="" id="">
        {students.map(student => (
          <option>{student.nombre}</option>
        )
        )}
      </select>
    </HomeMaster>
  )
}

export default Cursos