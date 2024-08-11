import NavBar from "../components/NavBar"
import { useStudents } from "../contexts/store"
import { useEffect } from 'react';
import usuario from '../assets/icons/usuario.png'

const HomeMaster = ({ children }) => {
  const { getStudents, user } = useStudents();
  useEffect(() => {
    user();
    getStudents();
  }, [])
  return (
    <>
      <div className="container-dashboard">
        <NavBar />
        <main className="main">
          <div className="nav-header">
            <h2>#Dashboard</h2>
            <div className="user">
              <img src={usuario} alt="user" /> Usuario
            </div>
          </div>
          {children}
        </main>
      </div>
    </>
  )
}

export default HomeMaster