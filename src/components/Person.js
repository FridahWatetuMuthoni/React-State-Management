import React from 'react'

function Person({name,email,phone}) {
    return (
        <section>
              <h3>{name}</h3>
              <p>{email}</p>
              <p>{phone}</p>
            </section>
  )
}

export default Person