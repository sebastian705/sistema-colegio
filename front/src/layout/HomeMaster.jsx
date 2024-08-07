import NavBar from "../components/NavBar"
import { useStudents } from "../contexts/store"
import { useEffect } from 'react';

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
        <main className="main-student">
          {children}
        </main>
      </div>
    </>
  )
}

export default HomeMaster