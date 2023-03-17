import React from 'react'

export const UbicationSection = () => {
  const transformLocation = () => {
    let location = Array.from(window.location.pathname)
    let index = 0
    while (index != -1) {
      index = location.indexOf('/', index)
      location[index + 1] = location[index + 1].toUpperCase()
      if (index != -1) {
        location.splice(index, 0, ' ')
        location.splice(index + 2, 0, ' ')
        index += 2
      }
    }
    location = location.join('')

    const posLastBar = location.lastIndexOf('/')

    location = {
      afterSection: decodeURI(location.slice(posLastBar + 2)),
      beforeSection: location.slice(0, posLastBar + 2)
    }

    return location
  }

  const { afterSection, beforeSection } = transformLocation()
  return (
    <section className='sec-ubication'>
      <h2 className='container-75'>
        Home {beforeSection}
        <span className='actually-section'>{afterSection}</span>
      </h2>
    </section>
  )
}
