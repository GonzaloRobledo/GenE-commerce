import React from 'react'
import { ItemObjective } from './ItemObjective'

export const SectionObjective = () => {
  return (
    <section className='sec-obj'>
      <div className='container-75'>
        <div className='sec-obj__title-p'>
          <h2>Custom Furniture Built Only For You</h2>
          <p>
            Built Only For You Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Saepe dolorum debitis consectetur reprehenderit
            non aliquam voluptates dolore aut vero consequuntur.
          </p>
        </div>
        <div className='sec-obj__objectives'>
          <ItemObjective
            icon={'🧭'}
            title='Mission'
            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          />
          <ItemObjective
            icon={'💎'}
            title='Vision'
            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          />
          <ItemObjective
            icon={'📜'}
            title='History'
            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          />
        </div>
      </div>
    </section>
  )
}
