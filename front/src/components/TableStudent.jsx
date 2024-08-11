import { useStudents } from "../contexts/store";
import { useEffect, useState } from "react";
import FormStudent from "./FormStudent";
import EditStudent from "./EditStudent";
import Modal from "./Modal";
function Table() {
  const { students, getStudents, deleteStudent } = useStudents();
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    getStudents();
  }, []);
  const isEditing = (id) => {
    setEdit(true)
    setId(id);
  }
  return (
    <>
      <Modal title='Agregar Estudiante' setShow={setShow} show={show}>
        <FormStudent setShow={setShow} />
      </Modal>
      <Modal title='Editar Estudiante' setShow={setEdit} show={edit}>
        <EditStudent id={id} />
      </Modal>
      <div className="container-table">
        <div className="title">
          <h2>Estudiantes</h2>
          <button className="btn btn-add" onClick={() => setShow(true)}>
            Agregar
          </button>
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
              students?.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.nombre}</td>
                    <td>{student.apellido}</td>
                    <td>{student.email}</td>
                    <td>{student.fecha_nacimiento}</td>
                    <td>
                      <button className="btn btn-edit" onClick={() => isEditing(student.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                      <button className="btn btn-delete" onClick={() => deleteStudent(student.id)}><i className="fa-solid fa-trash"></i>
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

export default Table