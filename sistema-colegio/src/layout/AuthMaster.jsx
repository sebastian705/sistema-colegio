
const AuthMaster = ({ children }) => {

  return (
    <>
      <main className="main-auth">
        <section className="form-section">
          <figure>
            <img src="https://img.freepik.com/vector-premium/volver-escuela-secundaria-vector-cartel-dibujos-animados-academia-universidad-edificio-educacion-universitaria_102902-52.jpg" alt="" />
          </figure>
          <div className="form-container">
            {children}
          </div>
        </section>
      </main>
    </>
  )
}

export default AuthMaster