import React, { useEffect, useState } from 'react'

export const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return window.removeEventListener('resize', () =>
      setWidth(window.innerWidth)
    )
  })

  return { width }
}
