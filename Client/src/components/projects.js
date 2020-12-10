import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

export const Projects = () => {
    // Check screen size using react hooks 
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
             width: undefined,
             height: undefined,
        });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }
      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize')
    }, [])

    return windowSize;
  }

  const size = useWindowSize()
    return (
        <div>
        </div>
    )
}
