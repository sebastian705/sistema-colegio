import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>
        {error.statusText || error.message}
      </p>
    </div>
  )
}

export default Error