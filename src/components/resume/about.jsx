import React from 'react'

export const About = ({data}) => {
  return (
    <section>
      <h2 className='title'>About</h2>
      <p>{data.about}</p>
    </section>
  )
}
