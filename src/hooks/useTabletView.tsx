import { useEffect, useState } from 'react'

function getWindowWidth() {
  return window.innerWidth
}

const useTabletView = () => {
  const [windowWidth, setWindowWidth] = useState(
    getWindowWidth(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth <= 768
}

export default useTabletView
