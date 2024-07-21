import React from 'react'
import { useStudents } from '../contexts/store'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

const NavBar = () => {
  const { setIsAuthenticated, logout } = useStudents();
  return (
    <>
      <header className='header'>
        <div>
          <h1>College</h1>
        </div>
        <nav className='navbar'>
          <ul>
            <li><Link to={'/'}>Estudiantes</Link></li>
            <li><Link to={'/dashboard/profesores'}>Profesores</Link></li>
            <li><Link to={'/dashboard/cursos'}>Cursos</Link></li>
            <li><Link to={'/dashboard/inscripciones'}>Inscripciones</Link></li>
            <li><a onClick={() => logout()}>Cerrar Sesión</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar