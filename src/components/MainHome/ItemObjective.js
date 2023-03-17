import React from 'react'

export const ItemObjective = ({ title, text, icon }) => {
  return (
    <article>
      <div className='icon-objective'>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
