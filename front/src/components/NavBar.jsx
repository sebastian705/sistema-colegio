import React from 'react'
import { useStudents } from '../contexts/store'
import { Link, Navigate } from 'react-router-dom';

const NavBar = () => {
  const { setIsAuthenticated, logout } = useStudents();
  const salirSesion = () => {
    logout()
    return < Navigate to={'/'} />
  }
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <i class="fa-solid fa-school"></i>
          <h1>College</h1>
        </div>
        <nav className='navbar'>
          <Link to={'/'}>
            <i className="fa-regular fa-user"></i>
            Estudiantes
          </Link>
          <Link to={'/dashboard/profesores'}>
            <i className="fa-solid fa-briefcase"></i>
            Profesores
          </Link>
          <Link to={'/dashboard/cursos'}>
            <i className="fa-solid fa-book"></i>
            Cursos
          </Link>
          <Link to={'/dashboard/inscripciones'}>
            <i className="fa-solid fa-list"></i>
            Inscripciones
          </Link>
          <Link to={'#'} onClick={() => salirSesion()}>
            <i className="fa-solid fa-circle-xmark"></i>
            Cerrar Sesión
          </Link>
        </nav>
      </header>
    </>
  )
}

export default NavBar