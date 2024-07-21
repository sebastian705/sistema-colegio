import React from 'react'

function Modal({ children, title, setShow, show }) {
  return (
    <>
      {
        show &&
        <main className="overlay">
          <section className="container-modal">
            <div className="modal-header">
              <div className="title">{title}</div>
            </div>
            <div className="content-modal">
              {children}
            </div>
            <i className="fa-regular fa-circle-xmark" onClick={() => setShow(false)}></i>
          </section>
        </main>
      }
    </>
  )
}

export default Modal